import React, { useContext } from "react";
import Blog from "./Blog";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner/Spinner";

export default function Blogs() {
  const { loading, posts } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-2xl mx-auto flex flex-col justify-center items-center my-4 mb-[60px]">
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : posts.length > 0 ? (
        posts.map((post) => <Blog key={post.id} post={post} />)
      ) : (
        <p>No Post Found</p>
      )}
    </div>
  );
}
