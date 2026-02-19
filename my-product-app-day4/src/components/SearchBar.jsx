import { useState, useRef, useEffect } from 'react';

const useProductSearch = (allProducts) => {
    const [query, setQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const [isSearching, setIsSearching] = useState(false);
    
    // useRef to hold the debounce timer
    const timer = useRef(null);

    const handleSearch = (searchTerm) => {
        setQuery(searchTerm);
        setIsSearching(true);

        // Clear existing timer
        if (timer.current) clearTimeout(timer.current);

        // Set 500ms debounce
        timer.current = setTimeout(() => {
            const lowerCaseQuery = searchTerm.toLowerCase().trim();

            if (!lowerCaseQuery) {
                setFilteredProducts(allProducts);
            } else {
                const results = allProducts.filter(product => 
                    product.title.toLowerCase().includes(lowerCaseQuery) ||
                    product.description.toLowerCase().includes(lowerCaseQuery) ||
                    product.category.toLowerCase().includes(lowerCaseQuery)
                );
                setFilteredProducts(results);
            }
            
            setIsSearching(false);
        }, 500);
    };

    useEffect(() => {
        if (!query) setFilteredProducts(allProducts);
    }, [allProducts]);

    return {
        query,
        handleSearch,
        filteredProducts,
        isSearching
    };
};

export default useProductSearch;