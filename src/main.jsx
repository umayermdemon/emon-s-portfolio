import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import "animate.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-[#06002C] min-h-screen">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  </React.StrictMode>
);
