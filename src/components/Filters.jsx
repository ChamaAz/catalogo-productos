export default function Filters({
  search,
  setSearch,
  category,
  setCategory,
  categories,
  sort,
  setSort
}) {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-6">
      <input
        type="text"
        placeholder="Buscar producto..."
        className="border p-2 rounded"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select
        className="border p-2 rounded"
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="all">Todas</option>
        {categories.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select
        className="border p-2 rounded"
        value={sort}
        onChange={e => setSort(e.target.value)}
      >
        <option value="">Sin ordenar</option>
        <option value="asc">Precio ↑</option>
        <option value="desc">Precio ↓</option>
      </select>
    </div>
  )
}
