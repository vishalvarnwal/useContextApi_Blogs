import React from "react";

export default function Blog(props) {
  const { title, author, category, date, tags, content } = props.post;
  return (
    <div className="mb-10">
      <h1 className="text-lg font-[800] text-green-950">{title}</h1>
      <p className="text-sm my-1">
        By <span className="italic">{author}</span> on{" "}
        <span className="font-bold underline">{category}</span>
      </p>
      <p className="text-sm my-1">Posted On {date}</p>
      <p className="mt-4 mb-2">{content}</p>
      <div className="flex gap-x-2 text-blue-700 font-semibold underline cursor-pointer">
        {tags.length &&
          tags.map((tag, index) => (
            <span className="text-xs" key={index}>
              #{tag}
            </span>
          ))}
      </div>
    </div>
  );
}
