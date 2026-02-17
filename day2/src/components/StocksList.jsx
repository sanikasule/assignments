import React from "react";
import FilterControls from "./SortAndFilter";
import useFiltering from "../hooks/useFiltering";

const StocksList = ({ data }) => {
    const {
        filterBy,          
        setFilterBy, 
        filterValue, 
        setFilterValue,
        filteredProducts,
    } = useFiltering(data)
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Stock Data</h2>

      <FilterControls filterBy={filterBy}
        setFilterBy={setFilterBy}
        filterValue={filterValue}
        setFilterValue={setFilterValue} />

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              <th>Date</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Adj Close</th>
              <th>Volume</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((row, index) => (
              <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td>{row.Date}</td>
                <td>{row.Open}</td>
                <td>{row.High}</td>
                <td>{row.Low}</td>
                <td>{row.Close}</td>
                <td>{row.AdjClose}</td>
                <td>{row.Volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const styles = {
  container: {
    padding: "20px",
  },
  heading: {
    marginBottom: "15px",
  },
  tableWrapper: {
    maxHeight: "500px",
    overflowY: "auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  thead: {
    position: "sticky",
    top: 0,
    backgroundColor: "#f4f4f4",
  },
  evenRow: {
    backgroundColor: "#ffffff",
  },
  oddRow: {
    backgroundColor: "#f9f9f9",
  },
  noData: {
    textAlign: "center",
    padding: "20px",
    color: "gray",
  },
};

export default StocksList;
