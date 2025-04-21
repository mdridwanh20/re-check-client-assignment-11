import React from "react";
import { RiFolderAddFill } from "react-icons/ri";
import { Link } from "react-router";
import useFetchData from "../Hook/useFetchData";
import Loader from "../Component/ShareComp/Loader";

export default function My_recommendations() {
  const { getQuery, loading, setLoading, setGetQuery } = useFetchData();

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="container m-auto px-4 py-16">
      <div className="py-5 lg:flex gap-5 items-center justify-between gap-5">
        <h1 className="font-semibold btn text-xl">My Recommendations</h1>

        <Link
          to="/add-queries"
          className="bg-gray-50 font-semibold text-lg flex btn items-center space-x-2"
        >
          <RiFolderAddFill className="text-xl" />
          <h1> Add New Queries</h1>
        </Link>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">
          {" "}
          <Loader></Loader>{" "}
        </p>
      ) : getQuery.length === 0 ? (
        <p className="text-center text-gray-500">
          No recommendations found for you.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead className="border-t-1 border-0">
              <tr>

                <th>Serial</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Image</th>
                <th>Date</th>

              </tr>
            </thead>
            <tbody>
              {getQuery.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.productName}</td>
                  <td>{item.brand}</td>

                  <td>
                    <img
                      className="w-10 rounded border border-gray-200 h-10"
                      src={item.imageUrl}
                      alt="Recommendation Image"
                    />
                  </td>

                  <td>{item.date}</td>


                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
