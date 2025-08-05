import { parseSearchTerm, getDummyResults } from '@/lib/data';

export default function PaginationPage({ searchParams }) {
  const rawTerm = searchParams.term || '';
  const page = parseInt(searchParams.page) || 1;
  const resultsPerPage = 6;

  const { corrected, message } = parseSearchTerm(rawTerm);

  const results = corrected ? getDummyResults(corrected, 30) : [];
  const paginatedResults = results.slice((page - 1) * resultsPerPage, page * resultsPerPage);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Fashion Search</h1>

        <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:justify-between sm:items-center">
          <SearchBar />
          <Filters />
        </div>

        {message && (
          <p className="text-sm text-orange-600 mb-4 text-center">{message}</p>
        )}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedResults.length > 0 ? (
            paginatedResults.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <p className="text-gray-600 col-span-full text-center">
              No results found for <span className="font-semibold">"{rawTerm}"</span>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}