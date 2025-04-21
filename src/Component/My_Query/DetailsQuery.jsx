import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loader from "../ShareComp/Loader";
import { Link, useParams } from "react-router";
import { GoArrowRight } from "react-icons/go";

export default function DetailsQuery() {
  const { id } = useParams();
  const { loading, setLoading } = useContext(AuthContext);

  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`https://re-check-server-assignment-11.vercel.app/add-query/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;

  if (!data)
    return <div className="text-center mt-10 text-red-500">No data found.</div>;

  
  return (
    <div className="max-w-4xl mx-auto my-12 px-4">

      <div className="py-5 flex items-center justify-between space-x-2">
        <h1 className="font-bold text-xl text-red-500">Details Queries</h1>

        <Link
          to="/my-query"
          className="bg-gray-50 font-semibold text-lg flex btn items-center space-x-1"
        >
          <h1>My Queries</h1>
          <GoArrowRight className="text-xl font-bold" />
        </Link>
      </div>

      

      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
        <img
          src={data.imageUrl}
          alt={data.productName}
          className="w-full h-64 object-cover rounded"
        />
        <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Product: {data.productName}
          </h2>
          <p className="text-gray-600">Brand: {data.brand}</p>
          <h3 className="text-xl font-semibold text-blue-700">
            Query Title: {data.queryTitle}
          </h3>
          <p className="text-gray-700">Boycotting Reason: {data.reason}</p>
        </div>

        <div className="flex items-center mt-6">
          <img
            src={data.buyer.profileImage}
            alt={data.buyer.userName}
            className="w-12 h-12 rounded-full border-2 border-gray-300"
          />
          <div className="ml-4">
            <p className="font-medium text-gray-800">{data.buyer.userName}</p>
            <p className="text-sm text-gray-500">{data.buyer.userEmail}</p>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500 space-y-1">
          <p>Date & Time: {data.dateAndTime}</p>
          <p>Recommendations: {data.recommendationCount}</p>
        </div>
      </div>
    </div>
  );
}
