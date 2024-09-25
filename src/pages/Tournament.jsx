import Constants from './Constants.jsx';
import { useState } from 'react';
import Logo from './Logo.jsx';


const Tournament = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const search = () => {
    const foundItem = Constants.filter((match) =>
      match.matchDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.matchDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.matchFormat.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (foundItem.length > 0) {
      console.log("Item found:", foundItem);
      return foundItem;
    } else {
      console.log("No items found");
      return [];
    }
  };




return (
  <div
    className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
    style={{
      fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif',
    }}
  >
    <div className="layout-container flex h-full grow flex-col">
    <Logo/>
      <div className="px-40 flex flex-1 justify-center ">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/4f95bf13-8ceb-40bb-a9a7-5deb3d234dfc.png")',
                }}
              >
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    The World of Cricket
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Buy tickets for the latest cricket matches, or find out
                    more about cricket tournaments and events.
                  </h2>
                </div>
                <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                  <div className="flex w-full flex-1 items-stretch  rounded-xl h-full">
                    <div className="text-[#6a8764] flex border border-[#dde5dc] bg-white items-center justify-center pl-[15px] rounded-l-xl border-r-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                      </svg>
                    </div>
                    <input
                      placeholder="Search tournaments, teams, players"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden  text-[#121711] focus:outline-0 focus:ring-0 border border-[#dde5dc] bg-white focus:border-[#dde5dc] h-full placeholder:text-[#6a8764] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#dde5dc] bg-white pr-[7px]">
                    
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
  {search().length > 0 ? (
    <div className="flex justify-between flex-wrap">
      {search().map((match) => (
        <div
          key={match.id}
          className="w-full md:w-1/2 xl:w-1/2 p-4"
        >
          <div className="flex items-center gap-6 py-19.5 px-9">
            <div
              className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-28 w-fit"
              style={{ backgroundImage: `url(${match.img})` }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-[#121711] text-base font-medium leading-normal ">
                {match.matchDescription}
              </p>
              <p className="text-[#6a8764] text-sm font-normal leading-normal line-clamp-2 py-0.5">
                {match.matchFormat}
              </p>
              <p className="text-[#6a8764] text-sm font-normal leading-normal  py-4">
                {match.venueInfo.venueName}, {match.venueInfo.country}
              </p>
              <p className="text-[#6a8764] text-sm font-normal leading-normal line-clamp-2">
                {match.matchDate}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p>No matches found.</p>
  )}
</div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Tournament;