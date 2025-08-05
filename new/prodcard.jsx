export default function ProductCard({ product }) {
  return (
    <div className="border p-4 m-2">
      <h2>{product.name}</h2>
      <p>Fashion Product ID: {product.id}</p>
    </div>
  );
}