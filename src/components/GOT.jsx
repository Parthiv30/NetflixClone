import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import gotposter from "../assets/MarvelPosters/GOT/gotposter.png";
import one from "../assets/MarvelPosters/GOT/one.png";
import two from "../assets/MarvelPosters/GOT/2.png";
import three from "../assets/MarvelPosters/GOT/3.png";
import four from "../assets/MarvelPosters/GOT/4.png";
import five from "../assets/MarvelPosters/GOT/5.png";
import six from "../assets/MarvelPosters/GOT/6.png";
import s from "../assets/MarvelPosters/GOT/7.jpg";
import e from "../assets/MarvelPosters/GOT/8.jpg";
import n from "../assets/MarvelPosters/GOT/9.jpg";
import t from "../assets/MarvelPosters/GOT/10.jpg";
import el from "../assets/MarvelPosters/GOT/11.jpg";
import tw from "../assets/MarvelPosters/GOT/12.jpg";
import th from "../assets/MarvelPosters/GOT/13.jpg";
import fo from "../assets/MarvelPosters/GOT/14.jpg";
import fi from "../assets/MarvelPosters/GOT/15.jpg";
import si from "../assets/MarvelPosters/GOT/16.jpg";

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
    <div className="scroll-smooth">
      <SideBarMain />
      <div className="h-screen w-screen relative overflow-x-hidden">
        <div className="ms-28 absolute w-full h-full z-50 bg-black/80"></div>
        <div
          className="w-full h-full"
          style={{
            // backgroundImage: `url(${gotposter})`,
            backgroundImage:
              "url('https://wallpapercave.com/wp/wp9419987.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/25  h-full"
          style={{ width: "50%" }}
        ></div>

        {/* Movie-Detail */}
        <div className="absolute top-0 z-50 ms-28 m-24  shadow-md">
          <p
            style={{
              letterSpacing: "0.6rem",
            }}
            className="text-white font-bold uppercase text-5xl w-[994px] "
          >
            Guardians of the Galaxy Vol. 3
          </p>
          <p
            style={{
              letterSpacing: "0.1rem",
              lineHeight: "2rem",
            }}
            className="text-1xl pt-4 font-sans text-gray-300 w-[900px] text-wrap shadow-md "
          >
            Marvel Studios' Guardians of the Galaxy Volume 3 Movie Poster
            Overview In Marvel Studios "Guardians of the Galaxy Vol. 3" our
            beloved band of misfits are looking a bit different these days.
            Peter Quill, still reeling from the loss of Gamora, must rally his
            team around him to defend the universe along with protecting one of
            their own. A mission that, if not completed successfully, could
            quite possibly lead to the end of the Guardians as we know them.
          </p>

          <div className="grid grid-cols-3 w-fit ">
            <div className="w-fit">
              <p className="text-white font-bold mt-5">Director</p>
              <p className="text-gray-300  mt-1">James Gunn</p>
            </div>
            <div className="w-fit">
              <p className="text-white font-bold mt-5">Cast</p>
              <p className="text-gray-300 w-48 mt-1">
                Chris Pratt, Karen Gillan, Pom Klementieff, Sean Gunn, Will
                Poulter, Maria Bakalova and Chukwudi Iwuji
              </p>
            </div>
            <div className="w-fit">
              <p className="text-white font-bold mt-5">Release Date</p>
              <p className="text-gray-300 w-52 mt-1">May 5, 2023</p>
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
            src="https://cdn.marvel.com/content/1x/guardiansofthegalaxyvolume3_lob_crd_03.jpg"
          />
        </div>

        {/* Scrennshots */}
        <div className="ms-24  columns-4 gap-4 bg-black px-6 py-10">
          <div className=" relative masonry-item group overflow-visible ">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={one}
              alt="Wallpaper 1"
              loading="lazy"
            />
          </div>

          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={two}
              alt="Wallpaper 2"
              loading="lazy"
            />
          </div>

          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={three}
              alt="Wallpaper 3"
              loading="lazy"
            />
          </div>

          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={four}
              alt="Wallpaper 4"
              loading="lazy"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={five}
              alt="Wallpaper 13"
              loading="lazy"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className={
                "mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              }
              src={six}
              alt="Wallpaper 5"
              loading="lazy"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={s}
              alt="Wallpaper 7"
              loading="lazy"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={e}
              alt="Wallpaper 6"
              loading="lazy"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={n}
              alt="Wallpaper 8"
              loading="lazy"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={t}
              alt="Wallpaper 8"
              loading="lazy"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={el}
              alt="Wallpaper 9"
              loading="lazy"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={tw}
              alt="Wallpaper 10"
              loading="lazy"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={th}
              alt="Wallpaper 11"
              loading="lazy"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={fo}
              alt="Wallpaper 12"
              loading="lazy"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={fi}
              alt="Wallpaper 13"
              loading="lazy"
            />
          </div>
          <div className="relative masonry-item group overflow-visible">
            <img
              className="mb-4 w-full rounded group-hover:scale-110 transition-all duration-300"
              src={si}
              alt="Wallpaper 13"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
