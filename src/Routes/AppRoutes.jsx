import { Route, Routes } from "react-router";

import React from "react";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import My_Queries from "../Pages/My_Queries";
import My_recommendations from "../Pages/My_recommendations";
import Recommendations_For_Me from "../Pages/Recommendations_For_Me";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import DetailsQuery from "../Component/My_Query/DetailsQuery";
import UpdateQuery from "../Component/My_Query/UpdateQuery";

import AddQueries from "../Pages/AddQueries";
import AllQueries from "../Pages/AllQueries";
import AllQueriesDetails from "../Component/AllQuery/AllQueriesDetails";
import AllRecommendations from "../Component/AllQuery/AllRecommendations";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Component/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />}></Route>

        <Route
          path="/add-queries"
          element={
            <PrivateRoute>
              <AddQueries />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/my-query"
          element={
            <PrivateRoute>
              <My_Queries />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/all-queries"
          element={
            <PrivateRoute>
              {" "}
              <AllQueries></AllQueries>{" "}
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/all-queries-details/:id"
          element={<AllQueriesDetails></AllQueriesDetails>}
        ></Route>

        <Route
          path="/all-recommendations"
          element={<AllRecommendations></AllRecommendations>}
        ></Route>

        <Route path="/details-query/:id" element={<DetailsQuery />}></Route>

        <Route path="/update-query/:id" element={<UpdateQuery />}></Route>

        <Route
          path="/my-recommendations"
          element={<My_recommendations />}
        ></Route>

        <Route
          path="/recommendations-for-me"
          element={<Recommendations_For_Me />}
        ></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/register" element={<Register />}></Route>

        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} />

        
      </Route>
    </Routes>
  );
}
