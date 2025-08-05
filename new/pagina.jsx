import SearchBar from '@/components/SearchBar';
import Filters from '@/components/Filters';
import ProductCard from '@/components/ProductCard';
import { getDummyResults, isFashionKeyword } from '@/lib/data';

export default function PaginationPage({ searchParams }) {
  const term = searchParams.term || '';
  const page = parseInt(searchParams.page) || 1;
  const resultsPerPage = 6;

  const results = isFashionKeyword(term)
    ? getDummyResults(term, 30)
    : [];

  const paginatedResults = results.slice((page - 1) * resultsPerPage, page * resultsPerPage);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Fashion Search</h1>
        
        <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:justify-between sm:items-center">
          <SearchBar />
          <Filters />
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedResults.length > 0 ? (
            paginatedResults.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center">
              No results found for <span className="font-semibold">"{term}"</span>
            </p>
          )}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {page > 1 && (
            <a
              href={`?term=${term}&page=${page - 1}`}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition"
            >
              Previous
            </a>
          )}
          {page * resultsPerPage < results.length && (
            <a
              href={`?term=${term}&page=${page + 1}`}
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition"
            >
              Next
            </a>
          )}
        </div>
      </div>
    </main>
  );
}