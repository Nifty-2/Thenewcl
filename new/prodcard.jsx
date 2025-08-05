export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h2>
      <p className="text-sm text-gray-600">Fashion Product ID: {product.id}</p>
    </div>
  );
}