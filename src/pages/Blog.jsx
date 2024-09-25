import blogConstants from "./blogConstants.jsx";

import Fullblog from "./Fullblog.jsx";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo.jsx";

const Blog = () => {
  const navigate = useNavigate();

  const handleSubmit = (blog) => {
    console.log("clicked");
    console.log(blog);
    navigate("/blogs/blog", {
      state: { blog }, // pass the blog object as state
    });
  };
  const [input, setInput] = useState("");

  const search = () => {
    const foundItem = blogConstants.filter((blog) =>
      blog.description.toLowerCase().includes(input.toLowerCase()) ||
     blog.date.toLowerCase().includes(input.toLowerCase()) ||
      blog.author.toLowerCase().includes(input.toLowerCase())||
      blog.title.toLowerCase().includes(input.toLowerCase())
    );
    if (foundItem.length > 0) {
      console.log("Item found:", foundItem);
      return foundItem;
    } else {
      console.log("No items found");
      return [];
    }
  };
  const handleSearch = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
          <Logo/>
            <div className="flex flex-1 justify-end gap-8">
              <label className="flex flex-col min-w-250 !h-10 max-w-300">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                 
                  <input
                    placeholder="Search"
                    className="form-input flex min-w-[100px]flex-1 resize-none overflow-hidden rounded-xl h-70 text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-full placeholder:text-[#637588] px-4 rounded-l-none border-l-0 pl-2 text-lg font-normal leading-normal"
                    value={input}
                   onChange={handleSearch}
              
                  />
                </div>
              </label>
             
            </div>
          </header>
          <div className="gap-1 px-6 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-[#111418] tracking-light text-4xl font-bold leading-tight">
                    The top 5 greatest cricket matches of all time
                  </p>
                  <p className="text-[#637588] text-lg font-normal leading-normal">
                    By Alistair Cook · 2 days ago
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px, 1fr))] gap-3 p-4">
                {search().length > 0 ? search().map((blog) => (
                  <div key={blog.id} className="flex flex-col gap-3 pb-3">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                      style={{ backgroundImage: `url(${blog.img})` }}
                    ></div>
                    <div>
                      <p className="text-[#111418] text-lg font-bold leading-normal py-4">
                        {blog.title}
                      </p>
                      <p className="text-[#637588] text-lg font-normal leading-normal py-5">
                        {blog.description}
                      </p>
                      <p className="text-[#637588] text-lg font-normal leading-normal py-5">
                        {blog.author} · {blog.date}
                      </p>
                      <button
                        className="bg-[#1980e6] text-white text-lg font-bold leading-normal py-2 px-4 rounded-lg hover:bg-[#1565c0] transition duration-300"
                        onClick={() => handleSubmit(blog)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                )) : <p>No items found</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;