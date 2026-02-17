import { useState, useMemo } from 'react';

function useFiltering(items) {

    const [filterBy, setFilterBy] = useState('default');
    const [filterValue, setFilterValue] = useState('')

    const filteredProducts = useMemo(() => {

    // Always spread to avoid mutating the original array
    const copy = [...items];

    if (filterBy === 'date-from') {
      return copy.filter((item) => item.Date >= filterValue);
    }

    if (filterBy === 'date-to') {
      return copy.filter((item) => item.Date <= filterValue);
    }

    if (filterBy === 'price-low') {
      return copy.filter((item) => Number(item.Low) >= Number(filterValue));
    }

    if (filterBy === 'price-high') {
      return copy.filter((item) => Number(item.High) <= Number(filterValue));
    }

    if (filterBy === 'volume') {
      return copy.filter((item) => Number(item.Volume) >= Number(filterValue));
    }

    return copy; // default — original order
  }, [items, filterBy, filterValue]); //return dependencies array only of values not functions

  // No need to run since useMemo used
//   const filteredProducts = getFIlteredProducts(products);

  // Return everything App needs
  return {
    filterBy,          
    setFilterBy, 
    filterValue, 
    setFilterValue,
    filteredProducts,  
  };
}

export default useFiltering;