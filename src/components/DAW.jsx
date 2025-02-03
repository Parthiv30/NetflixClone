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

import React from "react";

export default function DAW() {
  return (
    <div className="">
      <SideBarMain />
      <div className="h-screen w-screen relative overflow-x-hidden">
        <div className="ms-28 absolute w-full h-full z-50 bg-black/90"></div>
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('https://images.alphacoders.com/136/1363753.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/95  h-full"
          style={{ width: "50%" }}
        ></div>

        {/* Movie-Detail */}
        <div className="absolute top-0 z-50 ms-28 m-24  shadow-md">
          <p
            style={{
              letterSpacing: "0.6rem",
            }}
            className="text-white font-bold uppercase text-5xl"
          >
            Deadpool And Wolverine
          </p>
          <p
            style={{
              letterSpacing: "0.1rem",
              lineHeight: "2rem",
            }}
            className="text-1xl pt-4 font-sans text-gray-300 w-[900px] text-wrap shadow-md "
          >
            Marvel Studios’ ”Deadpool & Wolverine” finds Wade Wilson with his
            past as the morally flexible Deadpool behind him, until he suddenly
            finds himself in a fight for the survival of his homeworld and must
            suit-up again—and convince a reluctant Wolverine to help him.
          </p>

          <div className="grid grid-cols-3 w-fit ">
            <div className="w-fit">
              <p className="text-white font-bold mt-5">Director</p>
              <p className="text-gray-300  mt-1">Shawn Levy</p>
            </div>
            <div className="w-fit">
              <p className="text-white font-bold mt-5">Producers</p>
              <p className="text-gray-300 w-36 mt-1">
                Kevin Feige, Ryan Reynolds, Shawn Levy and Lauren Shuler Donner
              </p>
            </div>
            <div className="w-fit">
              <p className="text-white font-bold mt-5">Executive Producers</p>
              <p className="text-gray-300 w-52 mt-1">
                Louis D’Esposito, Wendy Jacobson, Mary McLaglen, Josh McLaglen,
                Rhett Reese, Paul Wernick, George Dewey, Simon Kinberg and
                Jonathon Komack Martin
              </p>
            </div>
            <div className="w-fit">
              <p className="text-white font-bold mt-5">Writers</p>
              <p className="text-gray-300 w-48 mt-1">
                Ryan Reynolds & Rhett Reese & Paul Wernick & Zeb Wells & Shawn
                Levy
              </p>
            </div>
            <div className="w-fit">
              <p className="text-white font-bold mt-5">Cast</p>
              <p className="text-gray-300 w-48 mt-1">
                Cast Ryan Reynolds, Hugh Jackman, Emma Corrin, Morena Baccarin,
                Rob Delaney, Leslie Uggams, Karan Soni and Matthew Macfadyen
              </p>
            </div>
            <div className="w-fit">
              <p className="text-white font-bold mt-5">Release Date</p>
              <p className="text-gray-300 w-52 mt-1">July 26, 2024</p>
            </div>
          </div>

          <button className="bg-red-600 gap-2 group text-white w-28 justify-center flex p-2 mt-6 rounded-md font-bold">
            <Play className="group-hover:fill-white text-white  h-6" />
            <p>Play</p>
          </button>
        </div>

        {/* poster */}
        <div className="absolute z-50 mr-28 mt-28 group right-0 top-0">
          <img
            className="rounded-md object-cover transition-transform duration-300 group-hover:scale-105 "
            src="https://cdn.marvel.com/content/1x_masonry/deadpoolandwolverine_lob_crd_03.jpg"
          />
        </div>

        {/* Scrennshots */}
        <div className="ms-24 columns-4 gap-4 bg-black px-5 py-10">
          <div className=" relative masonry-item group overflow-visible ">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://images2.alphacoders.com/137/1371043.jpeg"
              alt="Wallpaper 1"
            />
          </div>

          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://wallpapercave.com/wp/wp14261941.jpg"
              alt="Wallpaper 2"
            />
          </div>

          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://wallpapercave.com/wp/wp14261968.jpg"
              alt="Wallpaper 3"
            />
          </div>

          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://images8.alphacoders.com/137/1371038.jpeg"
              alt="Wallpaper 4"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://images.alphacoders.com/136/1363753.jpeg"
              alt="Wallpaper 13"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://wallpapercave.com/wp/wp14261953.jpg"
              alt="Wallpaper 5"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://wallpapercave.com/wp/wp14376950.jpg"
              alt="Wallpaper 7"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://wallpapercave.com/wp/wp14274617.jpg"
              alt="Wallpaper 6"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://wallpapercave.com/wp/wp14376962.jpg"
              alt="Wallpaper 8"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://wallpapercave.com/wp/wp14261921.jpg"
              alt="Wallpaper 8"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://images7.alphacoders.com/136/1369924.jpg"
              alt="Wallpaper 9"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://wallpapercave.com/wp/wp14261935.jpg"
              alt="Wallpaper 10"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://wallpapercave.com/wp/wp14261927.jpg"
              alt="Wallpaper 11"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://wallpapercave.com/wp/wp14261940.jpg"
              alt="Wallpaper 12"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://images.alphacoders.com/136/1362101.jpeg"
              alt="Wallpaper 13"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://wallpapercave.com/wp/wp14376984.jpg"
              alt="Wallpaper 13"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://images7.alphacoders.com/138/1382534.jpg"
              alt="Wallpaper 13"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src="https://images7.alphacoders.com/138/1387119.jpg"
              alt="Wallpaper 13"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
