import React from "react";
import { NavLink } from "react-router-dom";

export default function Blog(props) {
  const { title, author, category, date, tags, content, id } = props.post;
  return (
    <div className="mb-10">
      <NavLink to={`/blog/${id}`}>
        <h1 className="text-lg font-[800] text-green-950">{title}</h1>
      </NavLink>
      <p className="text-sm my-1">
        By <span className="italic">{author}</span> on{" "}
        <NavLink to={`/categories/${category.replaceAll(" ", "-")}`}>
          <span className="font-bold underline">{category}</span>
        </NavLink>
      </p>
      <p className="text-sm my-1">Posted On {date}</p>
      <p className="mt-4 mb-2">{content}</p>
      <div className="flex gap-x-2 text-blue-700 font-semibold underline cursor-pointer">
        {tags.length &&
          tags.map((tag, index) => (
            <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`} key={index}>
              <span className="text-xs">#{tag}</span>
            </NavLink>
          ))}
      </div>
    </div>
  );
}
