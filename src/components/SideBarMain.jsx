import React from "react";
import "@splidejs/react-splide/css";

import {
  Clapperboard,
  Home,
  Plus,
  Search,
  Shapes,
  Shuffle,
  TrendingUp,
  TvMinimal,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function SideBarMain() {
  return (
    <>
      <div className="flex">
        <div className="w-28 flex fixed h-[100%] z-50 flex-col gap-11 justify-center items-center bg-black">
          <Search className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></Search>
          <NavLink to="/homepage">
            <Home className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></Home>
          </NavLink>
          <Shuffle className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></Shuffle>
          <TrendingUp className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></TrendingUp>
          <TvMinimal className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></TvMinimal>
          <Clapperboard className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></Clapperboard>
          <Shapes className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></Shapes>
          <Plus className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></Plus>
        </div>
      </div>
    </>
  );
}

export default SideBarMain;
