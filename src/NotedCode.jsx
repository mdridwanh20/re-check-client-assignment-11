const handleDelete = (id) => {

    setLoading(true)
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
          toast.success("Successfully delete your query ");
          setLoading(false)
          
        } else {
          console.log("This error from my query delete");
          setLoading(false)
        }
      });
  };
