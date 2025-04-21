import React, { use } from "react";
import { useContext } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Loader() {
  const { loading } = useContext(AuthContext);

  if (!loading) return null;

  

  return (
    <div className="flex items-center justify-center h-screen">
      <ScaleLoader
        color="#000000"
        height={52}
        loading
        margin={2}
        radius={0}
        width={3}
      />
    </div>
  );
}
