import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (<>
  <div className="w-full text-white">
    <img className="w-full h-[400px] object-cover" src ="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/42f6dd08-d478-46e4-a4a8-e3a93aa7e085/IN-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/"/>
     <div className="fixed bg-black/40 top-0 left-0 w-full h-[550px]"/>
     <div className="absolute top-[20%] p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        
     </div>
  </div>
  <SavedShows/>
  </>);
};

export default Account;
