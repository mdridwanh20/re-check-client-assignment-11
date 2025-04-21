import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loader from "../ShareComp/Loader";
import toast from "react-hot-toast";
import UserInfo from "./UserInfo";
import RecommendationForm from "./RecommendationForm";

export default function AllQueriesDetails() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const navigate = useNavigate()

  const { loading, setLoading } = useContext(AuthContext);

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

  //update recommended count

  const recommendationCount = (e) => {
    e.preventDefault();
    const form = e.target
    const productName = form.productName.value; 
    const imageUrl = form.imageUrl.value;       
    const queryTitle = form.queryTitle.value;   
    const reason = form.reason.value;           

    const UpdateQueryData = {
      productName,
      imageUrl,
      queryTitle,
      reason,
      recommendationCount: (data.recommendationCount || 0) + 1,
    };

    // update the data
    fetch(`https://re-check-server-assignment-11.vercel.app/add-query/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(UpdateQueryData),
    })
      .then((res) => res.json())
      .then((data) => {
        // ✅ If updated successfully
        if (data.modifiedCount) {
          console.log(data);
          navigate('/all-recommendations')
          form.reset()
          return toast.success("Thanks for recommending!");
        }
        
        // update the count on frontend
        setData((prev) => ({
          ...prev,
          recommendationCount: prev.recommendationCount + 1,
          productName,
          imageUrl,
          queryTitle,
          reason, // ✅ sync form inputs with frontend state
        }));


      })
      .catch((error) => {
        console.error("Error updating query:", error);
        toast.error()
      });
      
  };

  return (
    <div className="py-16 container m-auto px-4">
      {/* user information here */}

      <div>
        <UserInfo data={data}></UserInfo>
        
      </div>

      {/* Recommendation Section */}

      <div className="py-8 max-w-5xl m-auto">

        <RecommendationForm
          data={data}
          recommendationCount={recommendationCount}
        ></RecommendationForm>

      </div>
    </div>
  );
}
