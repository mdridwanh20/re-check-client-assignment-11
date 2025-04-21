import React, { useEffect, useState } from "react";
import useFetchData from "../../Hook/useFetchData";
import { MdOutlineRecommend } from "react-icons/md";

import { FaCheck, FaStar, FaCommentAlt, FaEye, FaTwitter, FaYoutube, FaFacebookF, FaRss, FaUser, FaLock } from "react-icons/fa";

import HeadIcon from "../../assets/head-hunting.png";
import Loader from "../ShareComp/Loader";
import { Link } from "react-router";

export default function RecentQuery() {
  const { getQuery, setLoading, setGetQuery } = useFetchData();

  return (
    <div className="py-10 mx-auto max-w-screen-xl">
      <div>
        <h1 className="py-4 font-bold text-center text-3xl">Recent Queries:</h1>
        <div className="border-0 border-b-1 w-full border-gray-300"></div>
      </div>

      <div className="grid gap-10 lg:grid-cols-12 py-6">
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 gap-10">
            {getQuery.length > 0 ? (
              getQuery.map((query) => (
                <div key={query._id} className="p-4 bg-white border border-gray-200 rounded shadow">
                  <div className="flex items-start space-x-4">
                    <div>
                      <img
                        src={HeadIcon}
                        className="w-10 h-10 object-cover"
                        alt="Head Icon"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold capitalize text-gray-800">
                          Product Name:{" "}
                          <span className="font-normal">{query.productName}</span>
                        </h2>

                        <div className="flex space-x-2">
                          <button className="bg-red-400 cursor-pointer text-white px-3 py-1 rounded text-sm">
                            Question
                          </button>
                          <button className="bg-gray-800 cursor-pointer text-white px-3 py-1 rounded text-sm">
                            Report
                          </button>
                        </div>
                      </div>

                      <p className="text-gray-600 mt-2 capitalize font-semibold text-sm">
                        Brand: <span className="font-normal">{query.brand}</span>
                      </p>

                      <p className="text-gray-600 mt-2 capitalize font-semibold text-sm">
                        Boycotting Reason Details:{" "}
                        <span className="font-normal">{query.reason.substring(1, 200)}...</span>
                      </p>

                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500 mt-2">
                          Date: {query.date}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          Time: {query.time}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
                        <span className="text-green-600 cursor-pointer font-semibold flex items-center space-x-1">
                          <FaCheck className="text-green-600" />
                          <Link to={'/recommendations-for-me'}>Recommendations For me</Link>
                        </span>

                        <span className="flex items-center cursor-pointer space-x-1">
                          <MdOutlineRecommend className="text-gray-500 text-lg" />
                          <p className="text-xs text-gray-500">
                            Recommendation Count: <span className="font-bold">{query.recommendationCount}</span>
                          </p>
                        </span>

                        <span className="text-green-600 font-semibold flex items-center space-x-1">
                          <FaCheck className="text-green-600" />
                          <Link to={`/my-recommendations`}>My Recommendations</Link>
                        </span>

                        <span className="flex items-center cursor-pointer space-x-1">
                          <FaEye className="text-gray-500" />
                          <span>70 views</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-xl text-gray-500 py-6">
                No recent queries available.
              </p>
            )}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3">
          <div className="space-y-6 max-w-xs">
            
            {/* Stats Section */}
            <div className="rounded-md bg-white shadow-sm">
              <div className="text-red-500 font-semibold px-4 py-2">Stats</div>
              <div className="px-4 py-3 space-y-2">
                <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded text-sm">
                  <span className="flex items-center gap-2">
                    <FaRss className="text-gray-700" />
                    Questions
                  </span>
                  <span>( 20 )</span>
                </div>
                <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded text-sm">
                  <span className="flex items-center gap-2">
                    <FaRss className="text-gray-700" />
                    Answers
                  </span>
                  <span>( 50 )</span>
                </div>
              </div>
            </div>

            {/* Find Us Section */}
            <div className="rounded-md bg-white shadow-sm">
              <div className="text-red-500 font-semibold border-b px-4 py-2">Find Us</div>
              <div className="px-4 py-3 space-y-3 text-white text-sm font-medium">
                <div className="flex items-center gap-3 bg-orange-500 px-3 py-2 rounded">
                  <FaRss className="text-lg" />
                  Subscribe To RSS Feed
                </div>
                <div className="flex items-center gap-3 bg-blue-600 px-3 py-2 rounded">
                  <FaFacebookF className="text-lg" />
                  5,000 People like it
                </div>
                <div className="flex items-center gap-3 bg-sky-400 px-3 py-2 rounded">
                  <FaTwitter className="text-lg" />
                  3,000 Followers
                </div>
                <div className="flex items-center gap-3 bg-red-600 px-3 py-2 rounded">
                  <FaYoutube className="text-lg" />
                  1,000 Subscribers
                </div>
              </div>
            </div>

            {/* Login Section */}
            <div className="max-w-xs bg-white rounded-md shadow-sm p-5 space-y-4">
              <h2 className="text-red-400 font-semibold text-lg border-b pb-2">Login</h2>

              {/* Username Field */}
              <div className="flex items-center bg-red-100 rounded px-3 py-2">
                <FaUser className="text-red-500 mr-2" />
                <input
                  type="text"
                  placeholder="Username"
                  className="bg-transparent w-full focus:outline-none text-sm"
                />
              </div>

              {/* Password Field */}
              <div className="flex items-center bg-red-100 rounded px-3 py-2">
                <FaLock className="text-red-500 mr-2" />
                <input
                  type="password"
                  placeholder="••••••"
                  className="bg-transparent w-full focus:outline-none text-sm"
                />
                <button className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  Forget
                </button>
              </div>

              {/* Log In Button */}
              <button className="w-full bg-red-400 text-white py-2 rounded font-semibold">
                Log in
              </button>

              {/* Remember Me + Register */}
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center space-x-1 text-red-500">
                  <input type="checkbox" className="accent-red-500" />
                  <span className="font-medium">Remember Me</span>
                </label>
                <a href="#" className="text-gray-600 hover:underline">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
