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
    <div>
      <SearchBar />
      <Filters />
      <div className="grid">
        {paginatedResults.length > 0 ? (
          paginatedResults.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p>No results found for "{term}"</p>
        )}
      </div>
      {/* Simple pagination controls */}
      <div>
        {page > 1 && <a href={`?term=${term}&page=${page - 1}`}>Prev</a>}
        {page * resultsPerPage < results.length && <a href={`?term=${term}&page=${page + 1}`}>Next</a>}
      </div>
    </div>
  );
}