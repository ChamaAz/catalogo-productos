export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
      <img
        src={product.image}
        className="h-40 mx-auto object-contain"
        alt={product.title}
      />
      <h2 className="font-semibold mt-2 text-sm dark:text-white">
        {product.title}
      </h2>
      <p className="text-xs text-gray-500">{product.category}</p>
      <p className="font-bold mt-1 dark:text-white">{product.price} €</p>
    </div>
  )
}
