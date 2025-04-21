import React from "react";
import RegisterForm from "./RegisterForm";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { useNavigate } from "react-router";

export default function Register() {
  const { user, setUser, newUser, googleWithLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const photoURL = form.elements.photoURL.value;

    console.log("Form submitted:", { name, email, password, photoURL });

    // create new user;
    try {
      newUser(email, password).then((result) => {
        setUser(result.user);
        toast.success("Successfully Register");
        navigate("/");

        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photoURL });
            console.log("success fully update user", result);
          })
          .catch((error) => {
            console.log("failed update user", error);
          });

        form.reset();
      });
    } catch (error) {
      toast.error("Failed Register, please try again");
      console.log(error);
    }
  };

  // register with google
  // google with login
  const handlerWithGoogleRegister = () => {
    googleWithLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch((error) => {
        console.log("this is error from google", error);
        toast.error("Google login error");
      });
  };

  return (
    <RegisterForm
      handlerWithGoogleRegister={handlerWithGoogleRegister}
      handleRegister={handleRegister}
    ></RegisterForm>
  );
}
