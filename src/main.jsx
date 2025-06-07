import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
// In main.jsx or App.jsx
import 'leaflet/dist/leaflet.css';


ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
    <App />
    <ToastContainer/>
</BrowserRouter>
);
