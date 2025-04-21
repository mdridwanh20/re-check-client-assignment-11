import React from "react";

import Swal from "sweetalert2";
import My_Query_Card from "../Component/My_Query/My_Query_Card";

export default function My_Queries() {


  const handleDelete = (id, setLoading, setGetQuery) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6", // Blue color for the 'Yes' button
      cancelButtonColor: "#d33", // Red color for the 'Cancel' button
      confirmButtonText: "Yes, delete it!",
      showClass: {
        popup: "animate__animated animate__fadeInDown", // Animate.css class for showing the popup
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp", // Animate.css class for hiding the popup
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);

        // Proceed to delete the item
        fetch(`https://re-check-server-assignment-11.vercel.app/add-query/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setGetQuery((prevQuery) =>
                prevQuery.filter((query) => query._id !== id)
              );
            }
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showClass: {
                popup: "animate__animated animate__fadeInDown", // Animate.css class for showing the popup
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp", // Animate.css class for hiding the popup
              },

            });

            
          });
      } else {
        // If deletion was not successful
        console.log("Error occurred while deleting the query");
      }
      setLoading(false); // Set loading state to false
    });
    
  };


  return <My_Query_Card handleDelete={handleDelete}></My_Query_Card>;
}
