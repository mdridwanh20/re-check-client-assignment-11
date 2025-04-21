import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../Component/ShareComp/Loader";

export default function useFetchData() {
  const { user, loading, setLoading } = useContext(AuthContext);

  const [getQuery, setGetQuery] = useState([]);

  useEffect(() => {

    if(!user?.email) return;
    setLoading(true)


    fetch(`https://re-check-server-assignment-11.vercel.app/add-query?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setGetQuery(data);
        setLoading(false);

      })
      .catch((error) => {

        console.log(error);
        setLoading(false);

      });
  }, [user?.email, setLoading]);

  
  return {getQuery, loading, setLoading, setGetQuery};
}
