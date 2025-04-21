import React, { useContext } from "react";
import useFetchData from "../../Hook/useFetchData";
import { Link } from "react-router";
import Loader from "../ShareComp/Loader";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { RiFolderAddFill } from "react-icons/ri";

export default function My_Query_Card({ handleDelete }) {
  const { getQuery, setGetQuery, setLoading } = useFetchData();

  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      
      <div className="container my-16 m-auto px-4">
        <div className=" flex items-center space-x-2">

          <Link
            to="/add-queries"
            className="bg-gray-50 font-semibold text-lg flex btn items-center space-x-2"
          >
            <RiFolderAddFill className="text-xl" />
            <h1> Add New Queries</h1>
          </Link>
          
        </div>

        {getQuery.length === 0 ? (
          <div className="text-center text-gray-500 text-xl mt-10">
            No queries found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {getQuery.map((query) => (
              <div
                key={query._id.$oid}
                className="border border-gray-200 p-4 rounded shadow-lg"
              >
                <img
                  src={query.imageUrl}
                  alt={query.productName}
                  className="w-full h-40 object-cover rounded"
                />
                <h2 className="text-lg font-bold mt-2">
                  Name:{query.productName}
                </h2>
                <p className="text-sm text-gray-600">Brand: {query.brand}</p>
                <h3 className="font-semibold mt-2">
                  Title: {query.queryTitle}
                </h3>
                <p className="text-sm text-gray-700">
                  Boycotting Details:
                  {query.reason.substring(0, 200)}...
                </p>
                <div className="flex items-center mt-4">
                  
                  <img
                    src={query.buyer.profileImage}
                    alt={query.buyer.userName}
                    className="w-10 h-10 rounded-full"
                  />

                  <div className="ml-3">
                    <p className="text-sm font-medium">
                      {query.buyer.userName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {query.buyer.userEmail}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500  mt-2">{query.date}</p>
                  <p className="text-xs text-gray-500  mt-2">{query.time}</p>
                </div>

                <p className="text-xs text-gray-500 font-bold mt-2">Recommendation Count: {query.recommendationCount}</p>
  
                <div className="flex justify-between mt-4">
                  <Link
                    to={`/update-query/${query._id}`}
                    className="btn btn-sm bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Update
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(query._id, setLoading, setGetQuery)
                    }
                    className="btn btn-sm bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                  <Link
                    to={`/details-query/${query._id}`}
                    className="btn btn-sm bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
