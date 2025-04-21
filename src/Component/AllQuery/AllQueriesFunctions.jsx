import React, { useState } from 'react'
import useFetchData from '../../Hook/useFetchData';

export default function AllQueriesFunctions() {

    
      const { getQuery, loading } = useFetchData();
      const [search, setSearch] = useState("");
      const [sortByTime, setSortByTime] = useState(false);
    
      const handlerSearch = (e) => {
        setSearch(e.target.value);
      };
    
      // search work
      const filterQueries = getQuery.filter((query) => {
        const searchItem = search.toLowerCase();
    
        if (searchItem === "") {
          return true;
        }
    
        return (
          query.queryTitle.toLowerCase().includes(searchItem) ||
          query.productName.toLowerCase().includes(searchItem) ||
          query.brand.toLowerCase().includes(searchItem)
        );
      });
    
    
      const sortedQueries = sortByTime
        ? [...filterQueries].sort((a, b) => {
            const dateTimeA = new Date(`${a.date} ${a.time}`);
            const dateTimeB = new Date(`${b.date} ${b.time}`);
            return dateTimeB - dateTimeA;
          })
        : filterQueries;
    


  return {
    getQuery,
    loading, 
    search,
    setSearch,
    sortByTime,
    setSortByTime,
    handlerSearch,
    filterQueries,
    sortedQueries

  }
}
