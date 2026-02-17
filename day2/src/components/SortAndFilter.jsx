function FilterControls({filterBy, setFilterBy, filterValue, setFilterValue}) {
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "24px",
      }}
    >
      <label style={{ fontWeight: "600", fontSize: "14px" }}>
        Filter By:
      </label>

      <select
        value={filterBy}
        onChange={(e) => setFilterBy(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ddd",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        <option value="">Default</option>
        <option value="date-from">From Date</option>
        <option value="date-to">To Date</option>
        <option value="price-low">Price Low</option>
        <option value="price-high">Price High</option>
        <option value="volume">Volume</option>
      </select>

      {/* Date Input */}
      {(filterBy === "date-from" || filterBy === "date-to") && (
        <input type="date" value={filterValue} onChange={(e) => setFilterValue(e.target.value)}/>
      )}

      {/* Price Input */}
      {(filterBy === "price-low" || filterBy === "price-high") && (
        <input type="number" value={filterValue} onChange={(e) => setFilterValue(e.target.value)}/>
      )}

      {/* Volume Input */}
      {filterBy === "volume" && (
        <input type="number" min={100} value={filterValue} onChange={(e) => setFilterValue(e.target.value)}/>
      )}
    </div>
  );
}

export default FilterControls;
