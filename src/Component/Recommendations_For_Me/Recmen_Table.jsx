import React from "react";
import { RiFolderAddFill } from "react-icons/ri";
import { Link } from "react-router";
import Loader from "../ShareComp/Loader";

export default function Recmen_Table({ getQuery, loading, handlerDelete }) {


  return (
    
    <div className="container m-auto px-4 py-16">
      <div className="py-5 lg:flex items-center justify-between gap-5">
        <h1 className="font-semibold btn text-xl">Recommendations For Me</h1>

        <Link
            to="/add-queries"
            className="bg-gray-50 font-semibold text-lg flex btn items-center space-x-2"
          >
            <RiFolderAddFill className="text-xl" />
            <h1> Add New Queries</h1>
          </Link>
          

      </div>

      {loading ? (
        <p className="text-center text-gray-500"> <Loader></Loader> </p>
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
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {getQuery.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.productName}</td>
                  <td>{item.brand}</td>
                  <td>{item.date}</td>
                  <td className="flex items-center space-x-4">
                    {/* Use the handlerDelete function passed as a prop */}
                    <button
                      onClick={() => handlerDelete(item._id)}
                      className="btn px-5 btn-error text-white h-9"
                    >
                      Delete
                    </button>
                    <div className="tooltip" data-tip="You cannot update this">
                      <button className="btn px-5 btn-primary h-9">
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>

  );
}
