import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./Routes/AppRoutes.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <AuthProvider>

      <AppRoutes></AppRoutes>
      <Toaster></Toaster>
    </AuthProvider>

  </BrowserRouter>
);
