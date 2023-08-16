import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

export default function CategoryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <h2>
          Blogs On <span>{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
}
