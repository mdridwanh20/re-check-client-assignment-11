import { useState } from "react";
import Loader from "../Component/ShareComp/Loader";
import AllQueriesFunctions from "../Component/AllQuery/AllQueriesFunctions";
import { Link } from "react-router";
import { RiFolderAddFill } from "react-icons/ri";

const AllQueries = () => {
  const {
    loading,
    sortedQueries,
    getQuery,
    search,
    handlerSearch,
    sortByTime,
    setSortByTime,
  } = AllQueriesFunctions();

  // State for controlling grid layout columns
  const [gridCols, setGridCols] = useState(3);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="py-16 container m-auto px-3">
      {/* Add new query button */}
      <Link
        to="/add-queries"
        className="bg-gray-50 font-semibold text-lg flex btn items-center space-x-2"
      >
        <RiFolderAddFill />
        <h1>Add New Queries</h1>
      </Link>

      {/* Controls: total count, search, sort, and layout toggle */}
      <div className="p-5 lg:flex items-center justify-between font-semibold text-lg my-10 border border-gray-100 shadow-md rounded-md flex-wrap gap-3">
        <p>All Queries: {getQuery.length}</p>

        {/* Search input field */}
        <div>
          <label className="input flex m-0 p-0 w-96 ps-3 focus-within:border-gray-100 items-center">
            <input
              type="search"
              className="transition-all ease-in-out duration-300"
              required
              value={search}
              onChange={handlerSearch}
              placeholder="Enter your type"
            />
            <button className="btn border-none focus:outline-none focus:ring-0 focus:border-gray-100">
              Search
            </button>
          </label>
        </div>

        {/* Sorting & Grid Layout Toggle Buttons */}
        <div className="flex gap-2 flex-wrap">
          {/* Sort button */}
          <button onClick={() => setSortByTime(!sortByTime)} className="btn">
            {sortByTime ? "Default Order" : "Sort By Time"}
          </button>

          {/* Grid layout toggle buttons with meaningful labels */}
          <button onClick={() => setGridCols(1)} className="btn">
            Single View
          </button>
          <button onClick={() => setGridCols(2)} className="btn">
            Double View
          </button>
          <button onClick={() => setGridCols(3)} className="btn">
            Triple View
          </button>
        </div>
      </div>

      {/* Query Cards Grid */}
      <div
        className={`grid gap-10 transition-opacity ease-in-out duration-500 ${
          gridCols === 1
            ? "grid-cols-1"
            : gridCols === 2
            ? "grid-cols-2"
            : "lg:grid-cols-3"
        }`}
      >
        {sortedQueries.length > 0 ? (
          sortedQueries.map((query) => (
            <div
              key={query._id}
              className="border border-gray-300 p-4 rounded shadow-lg"
            >
              {/* Query title */}
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Title: {query.queryTitle}
                </h2>
              </div>

              {/* Product details */}
              <p className="text-gray-600 flex flex-col">
                <span>Name: {query.productName}</span>
                <span>Brand: {query.brand}</span>
              </p>

              {/* Product image */}
              <img
                src={query.imageUrl}
                alt={query.productName}
                className="my-4 h-40 object-cover w-full max-w-md rounded"
              />

              {/* Reason */}
              <p className="text-sm whitespace-pre-line">
                Reason: {query.reason}
              </p>

              {/* Recommendation count */}
              <p className="text-sm rounded-full font-semibold">
                Recommend Count: {query.recommendationCount}
              </p>

              {/* Buyer info */}
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={query.buyer.profileImage}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{query.buyer.userName}</p>
                  <p className="text-xs text-gray-500">
                    {query.buyer.userEmail}
                  </p>
                </div>
              </div>

              {/* Date and Time */}
              <div className="flex items-center justify-between">
                <p className="mt-2 text-xs text-gray-400">
                  Posted Date: {query.date}
                </p>
                <p className="mt-2 text-xs text-gray-400">
                  Posted Time: {query.time}
                </p>
              </div>

              {/* Recommend Button */}
              <div className="flex items-center justify-between pt-5">
                <Link
                  to={`/all-queries-details/${query._id}`}
                  className="mt-1 w-full text-center btn text-sm btn-dash"
                >
                  Recommend
                </Link>
              </div>
            </div>
          ))
        ) : (
          // Empty state
          <div className="text-center col-span-3 text-gray-500 py-10">
            <p className="text-lg font-medium">No queries found</p>
            <p className="text-sm">
              It looks like there are no product queries at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllQueries;
