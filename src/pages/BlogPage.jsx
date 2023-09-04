import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import Spinner from "../components/Spinner/Spinner";
import Blog from "../components/Blog";

export default function BlogPage() {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blog";
    setLoading(true);
    let url = `${newBaseUrl}?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("error in blog id service call", error);
      setBlog(null);
      setRelatedBlogs([]);
    }
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);
  //location.pathname as dependency
  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto mt-[100px] mb-6">
        <button
          className="border-2 border-gray-300 py-1 px-4 rounded-md"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : blog ? (
        <div className="w-11/12 max-w-2xl mx-auto flex flex-col justify-center items-center mt-[30px] mb-[60px]">
          <Blog post={blog} />
          <h2 className="max-w-2xl font-bold text-3xl mb-8 self-start">
            Related Blogs
          </h2>
          {relatedBlogs.map((post) => (
            <Blog post={post} key={post.id} />
          ))}
        </div>
      ) : (
        <p className="w-11/12 max-w-2xl mx-auto">No Blog Found</p>
      )}
    </div>
  );
}
