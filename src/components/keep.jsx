import React from "react";
import netflixLogo from "../assets/netflix.png";
import inter from "../assets/inter.png";
import poster from "../assets/poster.png";

import {
  Clapperboard,
  Delete,
  Home,
  Play,
  Plus,
  Search,
  Shapes,
  Shuffle,
  TrendingUp,
  TvMinimal,
} from "lucide-react";

export default function MainPage() {
  return (
    <div>
      <div className="bg-black  flex">
        <div className="flex h-[100%] ">
          <div className="w-28 flex fixed h-[100%] z-50 flex-col gap-11 justify-center items-center bg-black">
            <Search className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600  transition-all"></Search>
            <Home className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600  transition-all"></Home>
            <Shuffle className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600  transition-all"></Shuffle>
            <TrendingUp className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600  transition-all"></TrendingUp>
            <TvMinimal className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600  transition-all"></TvMinimal>
            <Clapperboard className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600  transition-all"></Clapperboard>
            <Shapes className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600  transition-all"></Shapes>
            <Plus className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600  transition-all"></Plus>
          </div>
          <div className="ml-28">
            <div className="h-screen flex bg-black text-white justify-center items-center relative">
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover"
                  src={inter}
                  alt="Not Found"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black opacity-99"></div>
              </div>
              <div className="relative flex justify-center items-center">
                <div className="flex flex-col h-full w-full mt-56">
                  <h3 className="text-2xl w-screen font-bold">
                    #1 in TV Shows Today
                  </h3>
                  <p className="text-lg text-white w-[500px] mt-2 font-sans">
                    When a young boy vanishes, a small town uncovers a mystery
                    involving secret experiments, terrifying supernatural
                    forces, and one strange little girl.
                  </p>
                  <div className="flex items-center pt-6">
                    <button className="bg-white flex justify-center items-center gap-2 text-black w-24 h-9 rounded-md text-sm font-bold">
                      <Play className="fill-black" />
                      <p>Play</p>
                    </button>
                    <button className="bg-gray-500 text-white w-24 h-9 ml-5 rounded-md text-sm font-bold">
                      More info
                    </button>
                  </div>
                  <p className="text-lg absolute mt-72 text-white left-0 font-bold">
                    Trending Now
                  </p>
                </div>
              </div>
            </div>

            <div className="flex bg-black gap-2.5 ">
              <div className="flex w-48 rounded-md">
                <img
                  src="https://i.pinimg.com/736x/93/c4/c8/93c4c8ac622d2dd48846d53ece5b4183.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex w-48  rounded-md">
                <img
                  src="https://play-lh.googleusercontent.com/proxy/5waQ7PQrqN-Uk5f7PzMN1AYkzEW4S6gkJm6FCjtdus07QDXi__xwh8n7DbWrAqPgWTpM-Z05xyOO_kwPHq7mbmOTuJTa8fulFx9uaMmdyjas5meJrg-gMOjlvLfEeZtSqquNiFSh8lj0jFlj_INhSo4Y-uPQgJKUZZaQqA=w240-h480-rw"
                  className="h-full w-full"
                />
              </div>
              <div className="flex w-48  rounded-md">
                <img
                  src="https://rukminim2.flixcart.com/image/416/416/jy4q3680/poster/t/b/f/medium-stranger-things-tv-series-poster-for-room-office-13-inch-original-imafgfzzzvkrenpd.jpeg?q=70&crop=false"
                  className="h-full w-full"
                />
              </div>
              <div className="flex w-48  rounded-md">
                <img
                  src="https://i0.wp.com/tmpc.movie.blog/wp-content/uploads/2018/10/96-movie-poster.jpg?w=2500&h=&ssl=1"
                  className="h-full w-full"
                />
              </div>
              <div className="flex w-48  rounded-md">
                <img
                  src="https://m.media-amazon.com/images/I/51HUrY93cwL.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex w-48  rounded-md">
                <img
                  src="https://i.pinimg.com/736x/6c/6e/b5/6c6eb51d048ec4d09f74417eb1c670ea.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex w-48  rounded-md">
                <img
                  src="https://m.media-amazon.com/images/I/71niXI3lxlL._SL1183_.jpg"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




<SplideSlide>
                  
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"
                    className="bg-white rounded-full cursor-pointer w-[153px] h-[153px]"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src={g}
                    className="bg-white rounded-full w-[153px] h-[153px]"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src="https://scontent-pnq1-2.xx.fbcdn.net/v/t39.30808-6/357071578_798819218274739_638570600682846263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=h9d2qtuPiggQ7kNvgGdGJTk&_nc_zt=23&_nc_ht=scontent-pnq1-2.xx&_nc_gid=AjeQtDvmiO11fvyijPloMs2&oh=00_AYBBLvprDfTamZKYp1fZd9XYjzh_H9ltobtSogX7AuJYSA&oe=6797DFF8"
                    className="bg-white rounded-full w-[153px] h-[153px]"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src="https://images.seeklogo.com/logo-png/13/1/star-wars-logo-png_seeklogo-131743.png?v=1957936112895841208"
                    className="bg-white rounded-full w-[153px] h-[153px]"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    src="https://seekvectors.com/storage/images/The%20boys%20logo-01.svg"
                    className="bg-white rounded-full w-[153px] h-[153px]"
                  />
                </SplideSlide>