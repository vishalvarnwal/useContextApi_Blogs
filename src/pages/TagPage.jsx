import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

export default function TagPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
  return (
    <div>
      <Header />
      <div className="my-[100px]">
        <div className="flex items-center max-w-2xl space-x-2 mx-auto">
          <button
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <h2 className="text-xl font-bold">
            Blogs Tagged <span className="underline text-blue-700">#{tag}</span>
          </h2>
        </div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}
