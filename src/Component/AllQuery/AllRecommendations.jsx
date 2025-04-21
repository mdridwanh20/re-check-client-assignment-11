import React, { useContext } from "react";
import useFetchData from "../../Hook/useFetchData";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loader from "../ShareComp/Loader";
import { RiFolderAddFill } from "react-icons/ri";
import { Link } from "react-router";

export default function AllRecommendations() {
  const { getQuery, loading } = useFetchData();
  const { user } = useContext(AuthContext);

  const totalRecommendations = getQuery ? getQuery.length : 0;

  
  if(loading) {
    return <Loader></Loader>
  }




  return (
    <div className="py-16 container m-auto px-4">

      <div className="py-4 gap-5 lg:flex items-center justify-between">
        
        <h1 className="font-bold btn h-8 text-xl">

          All Recommendations {totalRecommendations}
            
        </h1>

        <Link
            to="/add-queries"
            className="bg-gray-50 font-semibold text-lg flex btn items-center space-x-2"
          >
            <RiFolderAddFill className="text-xl" />
            <h1> Add Recommendations Queries</h1>
          </Link>

      </div>

      <div className="grid lg:grid-cols-3 gap-10">



        {getQuery.map((item) => (
          
          <div>

            <div
              key={item._id}
              className="bg-white shadow p-4 rounded-md border border-gray-200"
            >
              <div className="flex items-center space-x-4 mb-2">
                <img
                  src={user?.photoURL}
                  alt="photoURL"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{user?.displayName}</p>
                  <p className="text-sm text-gray-500">
                    {item.date} at {item.time}
                  </p>
                </div>
              </div>

              <div className="flex items-start py-5 space-x-4">
                <img
                  src={item.imageUrl}
                  alt={item.productName}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h2 className="font-bold text-lg">{item.productName}</h2>
                  <p className="text-sm text-gray-600">Brand: {item.brand}</p>
                  <p className="mt-2 text-gray-700">{item.reason}</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Query: {item.queryTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
