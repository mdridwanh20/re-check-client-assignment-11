import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useFetchData from "../../Hook/useFetchData";
import Loader from "../ShareComp/Loader";
import { Link } from "react-router";
import { GoArrowRight } from "react-icons/go";

export default function UserInfo({data}) {
  const { user, loading } = useContext(AuthContext);
 
   if(loading) {
     return <Loader></Loader>
   }
  

  return (
    <div>
      <div className="overflow-x-auto px-4">

        <div className="pb-4 flex items-center justify-between">

          <h1 className="font-semibold text-xl ">
            User Information
          </h1>

          <Link
            to="/all-queries"
            className="bg-gray-50 px-4 font-semibold text-lg flex btn items-center space-x-1"
          >
            <h1>All Queries</h1>
            <GoArrowRight className="text-xl  font-bold" />
          </Link>
          

        </div>

        <table className="table ">
          {/* head */}
          <thead className="">
            <tr className="border bg-gray-100 border-gray-400">
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Posted Date</th>
              <th>Posted Time</th>
            </tr>
          </thead>
          <tbody className="border bg-gray-50 border-gray-400">
            {/* row 1 */}
            <tr>

            <td>
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={user?.photoURL}
                  alt="user profile photo"
                />
              </td>

              <td>{user?.displayName}</td>

              <td> {user?.email} </td>


              <td>{data?.date}</td>

              <td>{data?.time}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
