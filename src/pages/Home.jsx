import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mt-[100px]">
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
}
