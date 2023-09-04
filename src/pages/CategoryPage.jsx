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
      <div className="w-11/12 max-w-2xl mx-auto mt-[100px] flex items-center gap-x-2">
        <button
          className="border-2 border-gray-300 py-1 px-4 rounded-md"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <h2 className="text-xl font-bold">
          Blogs On <span className="underline">{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
}
