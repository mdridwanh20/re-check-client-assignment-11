import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoArrowRight } from "react-icons/go";
import useFetchData from "../../Hook/useFetchData";
import Update_Form from "./Update_Form";
export default function UpdateQuery() {

  const { id } = useParams();
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const {getQuery} = useFetchData()
  console.log(getQuery);
  

  const handlerUpdateForm = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this query!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, keep it",
      reverseButtons: true,
      showClass: {
        popup: "animate__animated animate__fadeInDown", // Animate.css class for showing the popup
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp", // Animate.css class for hiding the popup
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const form = e.target;
        
        const productName = form.elements.productName.value;
        const brand = form.elements.brand.value;
        const imageUrl = form.elements.imageUrl.value;
        const queryTitle = form.elements.queryTitle.value;
        const reason = form.elements.reason.value;
        // capture the date and time;
       

        const UpdateQueryData = {
          productName,
          brand,
          imageUrl,
          queryTitle,
          reason,
          recommendationCount: 0,
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
            console.log(data);
            Swal.fire({
              title: "Updated!",
              text: "Your query has been updated",
              icon: "success",
              showClass: {
                popup: "animate__animated animate__fadeInDown", // Animate.css class for showing the popup
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp", // Animate.css class for hiding the popup
              },
            });

            navigate('/my-query')
          })

          .catch((error) => {
            console.error("Error updating query:", error);
            Swal.fire(
              "Error!",
              "There was an issue updating your query.",
              "error"
            );
          });
      }
    });
  };

  

  return (

     <Update_Form handlerUpdateForm={handlerUpdateForm}></Update_Form>
  )
}
