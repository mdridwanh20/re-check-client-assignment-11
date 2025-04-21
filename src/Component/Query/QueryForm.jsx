import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoArrowRight } from "react-icons/go";

import { Link } from "react-router";

export default function QueryForm({ handlerAddQueries }) {
  const { user } = useContext(AuthContext);

  return (

    <div className="my-10">
      <div className="container mx-auto p-6 bg-white shadow-md rounded-md">

        <div className="py-5 flex items-center justify-between space-x-2">
          <h1 className="font-bold text-xl text-red-500">Add Queries</h1>

          <Link
            to="/my-query"
            className="bg-gray-50 font-semibold text-lg flex btn items-center space-x-1"
          >
            <h1>My Queries</h1>
            <GoArrowRight className="text-xl font-bold" />
          </Link>
          
        </div>
        

        <form
          onSubmit={handlerAddQueries}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {/* User Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              defaultValue={user?.email}
              readOnly
              className="mt-1 cursor-not-allowed text-gray-400 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* User Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Name
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              name="userName"
              className="mt-1 cursor-not-allowed text-gray-400 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Profile Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User's Profile Image URL
            </label>
            <input
              type="url"
              name="profileImage"
              defaultValue={user?.photoURL}
              readOnly
              className="mt-1 cursor-not-allowed text-gray-400 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Product Brand */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Brand
            </label>
            <input
              type="text"
              name="brand"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Product Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Query Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Query Title
            </label>
            <input
              type="text"
              name="queryTitle"
              placeholder="e.g., Is there any better product that gives me the same quality?"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Boycotting Reason Details
            </label>
            <textarea
              name="reason"
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            ></textarea>
          </div>

          <div className="md:col-span-3">
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Add Query
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
}
