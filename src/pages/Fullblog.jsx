import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";

function Fullblog() {
  const location = useLocation();
  const blog = location.state.blog;

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('URL copied to clipboard!');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f4f0] px-10 py-3">
       <Logo/>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">NBA</a>
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">NFL</a>
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">MLB</a>
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">Soccer</a>
              <a className="text-[#111811] text-sm font-medium leading-normal" href="#">NHL</a>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: `url(${blog.img})` }}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="container flex justify-start">
              <div className="[480px]:p-4">
                <div className="flex flex-col gap-6">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover" />
                  <div className="flex flex-col gap-7">
                    <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-center">
                      {blog.title}
                    </h1>
                    <div className="flex-wrap gap-5 flex justify-center">
                      <button className="flex min-w-[100px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-100 px-4 bg-[#14b814] text-white text-sm font-bold leading-normal">
                        <span className="truncate">Read time: 6 minutes</span>
                      </button>
                      </div>
                      {/* New Block */}
                      <div className="flex gap-4">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                          style={{ backgroundImage: `url(${blog.img})` }}
                        ></div>
                        <div className="flex flex-col justify-center">
                          <p className="text-[#111811] text-[22px] font-bold leading-tight tracking-[-0.015em]">{blog.author}</p>
                          <p className="text-[#638863] text-base font-normal leading-normal">{blog.date}</p>
                          <p className="text-[#638863] text-base font-normal leading-normal">Published on July 12, 2022</p>
                        </div>
                      </div>
                      {/* End New Block */}

                  
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#111811] text-base font-normal leading-normal pb-4 pt-6 px-6 text-center">
              {blog.description}
            </p>
            <p className="text-[#111811] text-base font-normal leading-normal pb-4 pt-6 px-6 text-center">
              {blog.content}
            </p>

            <h3 className="text-[#111811] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Share this article
            </h3>
            <div className="p-4">
              <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-[#dce5dc] bg-white p-5 @[480px]:flex-row @[480px]:items-center">
                <div className="flex flex-col gap-1">
                  <p className="text-[#111811] text-base font-bold leading-tight">Share</p>
                  <p className="text-[#638863] text-base font-normal leading-normal">Let your friends know about this article</p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleCopyClick}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#14b814] text-white text-sm font-medium leading-normal"
                  >
                    <span className="truncate">Copy link</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <h3 className="text-[#111811] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Comments
            </h3>
            <div className="flex w-full flex-row items-start justify-start gap-3 p-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                style={{ backgroundImage: `url(${blog.img})` }}
              ></div>
              <div className="flex h-full flex-1 flex-col items-start justify-start">
                <div className="flex w-full flex-row items-start justify-start gap-x-3">
                  <p className="text-[#111811] text-sm font-bold leading-normal tracking-[0.015em]">Benjamin</p>
                  <p className="text-[#638863] text-sm font-normal leading-normal">2 days ago</p>
                </div>
                <p className="text-[#111811] text-sm font-normal leading-normal">
                  Great article! I've always been a fan of cricket, and it was interesting to learn about some of the most memorable moments in its history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fullblog;
