function FilterBar({
  category,
  setCategory,
  date,
  setDate,
  clearFilters,
}) {
  return (
    <div className="row mb-4">

      {/* Category Filter */}
      <div className="col-md-5 mb-2">
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Redux Toolkit">Redux Toolkit</option>
          <option value="Node JS">Node JS</option>
          <option value="CSS">CSS</option>
        </select>
      </div>

      {/* Date Filter */}
      <div className="col-md-5 mb-2">
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Clear Button */}
      <div className="col-md-2 mb-2">
        <button
          className="btn btn-secondary w-100"
          onClick={clearFilters}
        >
          Clear
        </button>
      </div>

    </div>
  );
}

export default FilterBar;