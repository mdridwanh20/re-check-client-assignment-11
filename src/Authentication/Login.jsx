import React, { useState } from 'react'
import LoginForm from './LoginForm';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router';

export default function Login() {

  const {user, setUser, loginUser,googleWithLogin } = useContext(AuthContext)


  const location = useLocation()
  const navigate = useNavigate()
  
  
  const from = location.state?.from.pathname || "/"

  
  const handleLogin = async (e) => {

    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;


    console.log('Form submitted:', {  email, password, });
    // Add your registration logic here

    // login user work here
    try {
      const result = await loginUser(email, password)
      setUser(result)
      toast.success(`Welcome Back`)
      navigate(from, {replace: true})

    } catch (error) {
      toast.error('Failed your login')
      console.log(error);
    }
    
    

    form.reset()
    
  };

   // google with login
   const handlerWithGoogle = () => {
    googleWithLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("Logged in with Google!");

        navigate(from, {replace: true})

      })
      .catch((error) => {
        console.log("this is error from google", error);
        toast.error("Google login error");
      });
  };



  return (
    <LoginForm handlerWithGoogle={handlerWithGoogle} handleLogin={handleLogin}></LoginForm>
  )
}
