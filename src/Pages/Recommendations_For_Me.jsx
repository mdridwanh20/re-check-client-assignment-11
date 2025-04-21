import React from "react";
import useFetchData from "../Hook/useFetchData";
import Recmen_Table from "../Component/Recommendations_For_Me/Recmen_Table";
import Swal from "sweetalert2";

export default function Recommendations_For_Me() {
  const { getQuery, loading, setLoading, setGetQuery } = useFetchData();

  // Define the handlerDelete function here
  const handlerDelete = (id) => {
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
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete the item.",
                icon: "error",
              });
            }
            setLoading(false); // Set loading state to false
          })
          .catch((error) => {
            console.error("Error occurred while deleting the query:", error);
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the item.",
              icon: "error",
            });
            setLoading(false); // Set loading state to false
          });
      }
    });
  };

  return (
    // Pass getQuery, loading, and handlerDelete as props to Recmen_Table
    <Recmen_Table
      getQuery={getQuery}
      loading={loading}
      handlerDelete={handlerDelete}
    />
  );
}
