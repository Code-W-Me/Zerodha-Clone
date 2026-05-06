import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://yashveer7264:2003@Yash@zerodhaclonecluster.0hj0neb.mongodb.net/?appName=ZerodhaCloneCluster";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
