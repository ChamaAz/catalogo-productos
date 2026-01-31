import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => setError("Error al cargar productos"))
      .finally(() => setLoading(false));
  }, []);

  const categories = [...new Set(products.map(p => p.category))];

  let filtered = products
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter(p => category === "all" || p.category === category);

  if (sort === "asc") filtered.sort((a,b) => a.price - b.price);
  if (sort === "desc") filtered.sort((a,b) => b.price - a.price);

  if (loading) return <p className="text-center mt-10">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold dark:text-white">
            Catálogo de productos
          </h1>
          <button
            className="border px-3 py-1 rounded dark:text-white"
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀ Claro" : "🌙 Oscuro"}
          </button>
        </div>

        <Filters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          categories={categories}
          sort={sort}
          setSort={setSort}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
