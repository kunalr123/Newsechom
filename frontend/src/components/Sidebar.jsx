import React from "react";
import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import PlayListCard from "./PlayListCard";
// import { UserData } from "../context/User";

const Sidebar = () => {
//   const navigate = useNavigate();

//   const { user } = UserData();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          className="flex items-center gap-3 pl-8 cursor-pointer"
        //   onClick={() => navigate("/")}
        >
          <img src={assets.home_icon} className="w-6" alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div
          className="flex items-center gap-3 pl-8 cursor-pointer"
        //   onClick={() => navigate("/")}
        >
          <img src={assets.search_icon} className="w-6" alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
