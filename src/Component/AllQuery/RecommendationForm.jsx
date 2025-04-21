import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loader from "../ShareComp/Loader";
import { MdOutlineRecommend } from "react-icons/md";
import { Link } from "react-router";

export default function RecommendationForm({ recommendationCount, data }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="">
      <div>
        <div className="py-5 flex items-center justify-between">
          <h1 className="bg-gray-50 font-semibold text-lg flex btn items-center space-x-1">
            Recommendation Form
          </h1>

          {/* <Link
            to={`/all-recommendations/${data._id}`}
            className="bg-gray-50 font-semibold text-lg flex btn items-center space-x-1"
          >
            <MdOutlineRecommend className="text-xl font-bold" />
            <h1>All Recommendations</h1>
          </Link> */}

        </div>
      </div>

      <form onSubmit={recommendationCount} className="">
        <div className="grid lg:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Title
            </label>
            <input
              type="text"
              name="queryTitle"
              defaultValue={data?.queryTitle}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              defaultValue={data?.productName}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="url"
              name="imageUrl"
              defaultValue={data?.imageUrl}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        {/* Reason */}
        <div className="py-5">
          <label className="block  text-sm font-medium text-gray-700">
            Reason
          </label>
          <textarea
            name="reason"
            rows="4"
            defaultValue={data?.reason}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          ></textarea>
        </div>

        <div className="md:col-span-3 my-5">
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Add Recommendation
          </button>
        </div>
      </form>
    </div>
  );
}
