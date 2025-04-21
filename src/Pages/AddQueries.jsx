import React, { useContext, useState } from "react";
import QueryForm from "../Component/Query/QueryForm";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";

export default function AddQueries() {
  const { user } = useContext(AuthContext);
  const [query, setQuery] = useState([]);
  const navigate = useNavigate()

  const handlerAddQueries = (e) => {
    e.preventDefault();

    const form = e.target;
    
    const productName = form.elements.productName.value;
    const brand = form.elements.brand.value;
    const imageUrl = form.elements.imageUrl.value;
    const queryTitle = form.elements.queryTitle.value;
    const reason = form.elements.reason.value;
    // capture the date and time;
    
    const now = new Date()

    const date = now.toLocaleDateString('en-US')
    const time = now.toLocaleTimeString('en-US')

    const queryData = {
      productName,
      brand,
      imageUrl,
      queryTitle,
      reason,

      buyer: {
        userName: user?.displayName,
        userEmail: user?.email,
        profileImage: user?.photoURL,
      },

      date,
      time,
      recommendationCount: 0,
    };


    // send to server data on mongodb
    fetch("https://re-check-server-assignment-11.vercel.app/add-query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryData),
    })
      .then((res) => res.json())
      .then((data) => {
        setQuery(data);
        console.log("response server data : > ------ ", data);
        navigate(`/my-query`);
      })
      .catch((error) => {
        console.log(error);
      });

    toast.success("Successfully added your query");
    console.log(queryData);
    form.reset();

  };

  return <QueryForm handlerAddQueries={handlerAddQueries}></QueryForm>;
}
