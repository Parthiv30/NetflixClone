import React from "react";
import netflixLogo from "../assets/netflix.png";
import inter from "../assets/inter.png";
import love from "../assets/love.png";
import got from "../assets/got.png";
import parthiv from "../assets/parthiv.jpg";
import si from "../assets/si.png";
import l from "../assets/l.png";
import g from "../assets/g.png";
import f from "../assets/f.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import {
  Star,
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
  ShoppingCart,
  HandCoins,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import SideBarMain from "./SideBarMain";

export default function Marvel() {
  return (
    <div className="">
      <SideBarMain />
      {/* Main Div */}
      <div className="h-screen w-screen relative">
        <div className="ms-28 absolute w-full h-[60%] z-50 bg-black/80 " />
        <div
          className="w-full h-[60%]"
          style={{
            backgroundImage:
              "url('https://wallpapercave.com/wp/wp2436369.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r h-[60%] from-black via-black/25" />
        <div className=" absolute top-0 ms-32 my-20 z-50">
          <p
            style={{
              letterSpacing: "0.6rem",
            }}
            className="text-5xl font-sans font-bold text-white   uppercase shadow-md "
          >
            Marvel Cinematic Universe
          </p>
          <p
            style={{
              letterSpacing: "0.1rem",
              lineHeight: "2rem",
            }}
            className="text-1xl pt-4 font-sans  text-gray-300 w-[900px] text-wrap shadow-md "
          >
            The Marvel Cinematic Universe (MCU) is an American media franchise
            and shared universe centered on a series of superhero films produced
            by Marvel Studios. The films are based on characters that appear in
            American comic books published by Marvel Comics. The franchise also
            includes several television series, short films, digital series, and
            literature. The shared universe, much like the original Marvel
            Universe in comic books, was established by crossing over common
            plot elements, settings, cast, and characters
          </p>
          <button className=" bg-red-600 gap-2 group text-white flex p-2 mt-6 rounded-md font-bold">
            <Star className="group-hover:fill-white" />
            <p>Favourite</p>
          </button>

          <p className="text-1xl font-sans font-bold text-white mt-20 shadow-md ">
            Watch-List
          </p>
        </div>

        <div className="ms-20 z-50">
          <div className="relative p-10 bg-black">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "16px",
                gridAutoRows: "masonry",
              }}
            >
              {/* Each image div */}
              <NavLink to="/dawpage">
                <div className="relative w-full overflow-hidden rounded-lg group">
                  {/* Image */}
                  <img
                    src="https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg"
                    alt="Deadpool and Wolverine"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Play Button */}
                    <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                      <Play className="text-white w-6 h-6" />
                    </div>

                    {/* Movie Details */}
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">
                        Deadpool and Wolverine
                      </h3>
                      <p className="text-sm w-32 text-wrap">
                        Action, Comedy | Release: 2024
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>

              <NavLink to="/gotpage">
                <div className="relative w-full overflow-hidden rounded-lg group">
                  {/* Image */}
                  <img
                    src="https://cdn.marvel.com/content/1x/guardiansofthegalaxyvolume3_lob_crd_03.jpg"
                    alt="Guardians of the Galaxy Vol-3"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Play Button */}
                    <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                      <Play className="text-white w-6 h-6" />
                    </div>

                    {/* Movie Details */}
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">
                        Guardians of the Galaxy Vol-3
                      </h3>
                      <p className="text-sm w-32 text-wrap">
                        Action, Adventure, Sci-Fi | Release: 2023
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>

              <div className="relative w-full overflow-hidden rounded-lg group">
                {/* Image */}
                <img
                  src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg"
                  alt="Avengers: Endgame"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>

                  {/* Movie Details */}
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">Avengers: Endgame</h3>
                    <p className="text-sm w-32 text-wrap">
                      Action, Adventure, Drama | Release: 2019
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg group">
                {/* Image */}
                <img
                  src="https://cdn.marvel.com/content/1x/thorragnarok_lob_crd_03_0.jpg"
                  alt="Thor: Ragnarok"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>

                  {/* Movie Details */}
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">Thor: Ragnarok</h3>
                    <p className="text-sm w-32 text-wrap">
                      Action, Adventure, Comedy | Release: 2017
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg group">
                {/* Image */}
                <img
                  src="https://m.media-amazon.com/images/I/51HUrY93cwL.jpg"
                  alt="Avengers: Infinity War"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>

                  {/* Movie Details */}
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">
                      Avengers: Infinity War
                    </h3>
                    <p className="text-sm w-32 text-wrap">
                      Action, Adventure, Sci-Fi | Release: 2018
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg group">
                {/* Image */}
                <img
                  src="https://cdn.marvel.com/content/1x/thunderbolts_lob_crd_03.jpg"
                  alt="Thunderbolts"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>

                  {/* Movie Details */}
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">Thunderbolts</h3>
                    <p className="text-sm w-32 text-wrap">
                      Action, Adventure, Sci-Fi | Release: 2025
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg group">
                {/* Image */}
                <img
                  src="https://cdn.marvel.com/content/1x/antmanandthewaspquantumania_lob_crd_03.jpg"
                  alt="Ant-Man and the Wasp: Quantumania"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>

                  {/* Movie Details */}
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">
                      Ant-Man and the Wasp: Quantumania
                    </h3>
                    <p className="text-sm w-32 text-wrap">
                      Action, Adventure, Comedy | Release: 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg group">
                {/* Image */}
                <img
                  src="https://cdn.marvel.com/content/1x/moonknight_lob_crd_05.jpg"
                  alt="Moon Knight (TV Series)"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>

                  {/* Movie Details */}
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">
                      Moon Knight (TV Series)
                    </h3>
                    <p className="text-sm w-32 text-wrap">
                      Action, Adventure, Drama | Release: 2022
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg group">
                {/* Image */}
                <img
                  src="https://cdn.marvel.com/content/1x/hawkeye_lob_crd_04.jpg"
                  alt="Hawkeye (TV Series)"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>

                  {/* Movie Details */}
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">Hawkeye (TV Series)</h3>
                    <p className="text-sm w-32 text-wrap">
                      Action, Adventure, Crime | Release: 2021
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg group">
                {/* Image */}
                <img
                  src="https://cdn.marvel.com/content/1x_masonry/blackpantherwakandaforever_lob_crd_05.jpg"
                  alt="Black Panther: Wakanda Forever"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>

                  {/* Movie Details */}
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">
                      Black Panther: Wakanda Forever
                    </h3>
                    <p className="text-sm w-32 text-wrap">
                      Action, Adventure, Drama | Release: 2022
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg group">
                {/* Image */}
                <img
                  src="https://cdn.marvel.com/content/1x/spider-mannowayhome_lob_crd_03.jpg"
                  alt="Spider-Man: No Way Home"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>

                  {/* Movie Details */}
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">
                      Spider-Man: No Way Home
                    </h3>
                    <p className="text-sm w-32 text-wrap">
                      Action, Adventure, Fantasy | Release: 2021
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg group">
                {/* Image */}
                <img
                  src="https://cdn.marvel.com/content/1x/shangchi_lob_crd_07.jpg"
                  alt="Shang-Chi and the Legend of the Ten Rings"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>

                  {/* Movie Details */}
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">
                      Shang-Chi and the Legend of the Ten Rings
                    </h3>
                    <p className="text-sm w-32 text-wrap">
                      Action, Adventure, Fantasy | Release: 2021
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg group">
                {/* Image */}
                <img
                  src="https://cdn.marvel.com/content/1x/eternals_lob_crd_06.jpg"
                  alt="Eternals"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>

                  {/* Movie Details */}
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">Eternals</h3>
                    <p className="text-sm w-32 text-wrap">
                      Action, Adventure, Drama | Release: 2021
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg group">
                {/* Image */}
                <img
                  src="https://m.media-amazon.com/images/I/71NnJU9liHL._SL1500_.jpg"
                  alt="Captain Marvel"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>

                  {/* Movie Details */}
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">Captain Marvel</h3>
                    <p className="text-sm w-32 text-wrap">
                      Action, Adventure, Sci-Fi | Release: 2019
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg group">
                {/* Image */}
                <img
                  src="https://cdn.posteritati.com/posters/000/000/053/631/doctor-strange-md-web.jpg"
                  alt="Doctor Strange"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>

                  {/* Movie Details */}
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">Doctor Strange</h3>
                    <p className="text-sm w-32 text-wrap">
                      Action, Adventure, Fantasy | Release: 2016
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-lg group">
                {/* Image */}
                <img
                  src="https://cdn.posteritati.com/posters/000/000/065/196/doctor-strange-in-the-multiverse-of-madness-md-web.jpg"
                  alt="Doctor Strange in the Multiverse of Madness"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <div className="absolute bottom-2 right-2 bg-red-600 rounded-full p-3 flex items-center justify-center">
                    <Play className="text-white w-6 h-6" />
                  </div>

                  {/* Movie Details */}
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">
                      Deadpool and Wolverine
                    </h3>
                    <p className="text-sm w-32 text-wrap">
                      Action, Adventure, Fantasy | Release: 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
