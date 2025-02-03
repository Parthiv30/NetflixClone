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

export default function MainPage() {
  return (
    <div className="bg-black flex overflow-x-hidden">
      <div className="flex h-[100%] ">
        {/* Sidebar */}
        <div className="w-28 flex fixed h-[100%] z-50 flex-col gap-11 justify-center items-center bg-black">
          <Search className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></Search>
          <Home className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></Home>
          <Shuffle className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></Shuffle>
          <TrendingUp className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></TrendingUp>
          <TvMinimal className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></TvMinimal>
          <Clapperboard className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></Clapperboard>
          <Shapes className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></Shapes>
          <Plus className="text-white size-6 pb-1 hover:border-b-4 hover:border-red-600 transition-all cursor-pointer"></Plus>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col relative ">
            <img className="w-full h-[90%] ms-28" src={inter} alt="Not Found" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            <div className="absolute top-0 right-0 flex">
              <NavLink to="/signup">
                {" "}
                <button className="bg-black text-white py-2 px-3 rounded-md shadow-md shadow-white m-6 ">
                  Logout
                </button>
              </NavLink>
              <img src={parthiv} className="w-10 h-10 m-6 rounded-full"></img>
            </div>
            <div className="absolute top-[45%] ms-32">
              <h3
                style={{ letterSpacing: "0.3rem" }}
                className="text-2xl w-screen font-bold font-sans  text-white"
              >
                #1 in TV Shows Today
              </h3>
              <p className="text-lg text-white w-[500px] mt-2 font-sans">
                When a young boy vanishes, a small town uncovers a mystery
                involving secret experiments, terrifying supernatural forces,
                and one strange little girl.
                <p className="text-lg text-white w-[500px] mt-2 font-sans">
                  The first season of Stranger Things is a sci-fi horror drama
                  about a group of friends in 1980s Indiana who encounter
                  supernatural forces and government secrets. The season begins
                  with the abduction of Will Byers by a creature from the Upside
                  Down, an alternate dimension created by the nearby Hawkins
                  National Laboratory
                </p>
              </p>
              <div className="flex items-center pt-6">
                <button className="bg-white hover:scale-105 flex justify-center items-center gap-2 text-black w-24 h-9 rounded-md text-sm font-bold">
                  <Play className="fill-black" />
                  <p>Play</p>
                </button>
                <button className="bg-gray-500 hover:scale-105 text-white w-24 h-9 ml-5 rounded-md text-sm font-bold">
                  More info
                </button>
              </div>
              <p className="text-lg  absolute -bottom-20 text-white left-0 font-bold">
                Trending Now
              </p>
            </div>
          </div>

          {/* Trending */}
          <div className="relative flex flex-col -my-[6%] ms-[130px] ">
            <Splide
              options={{
                type: "loop",
                perPage: 7,
                gap: "1rem",
                pagination: false,
                arrows: true,
                autoplay: true,
                interval: 3000,
              }}
              className="h-[300px] "
            >
              {/* <div className="flex flex-row gap-2 h-[300px] overflow-x-auto overflow-y-hidden"> */}
              <SplideSlide>
                <img
                  src="https://i.pinimg.com/736x/93/c4/c8/93c4c8ac622d2dd48846d53ece5b4183.jpg"
                  className=" w-[15rem] h-[300px] hover:scale-105 transition-all cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={si}
                  className=" w-[15rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://rukminim2.flixcart.com/image/416/416/jy4q3680/poster/t/b/f/medium-stranger-things-tv-series-poster-for-room-office-13-inch-original-imafgfzzzvkrenpd.jpeg?q=70&crop=false"
                  className=" w-[15rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://i0.wp.com/tmpc.movie.blog/wp-content/uploads/2018/10/96-movie-poster.jpg?w=2500&h=&ssl=1"
                  className=" w-[24rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://m.media-amazon.com/images/I/51HUrY93cwL.jpg"
                  className=" w-[24rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://i.pinimg.com/736x/6c/6e/b5/6c6eb51d048ec4d09f74417eb1c670ea.jpg"
                  className=" w-[15rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://m.media-amazon.com/images/I/71niXI3lxlL._SL1183_.jpg"
                  className=" w-[15rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://i.etsystatic.com/41029728/r/il/f2fa47/5944399759/il_794xN.5944399759_e6ap.jpg"
                  className=" w-[15rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kill-et00374797-1718179453.jpg"
                  className=" w-[15rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://m.media-amazon.com/images/I/71DwIcSgFcS._SL1500_.jpg"
                  className=" w-[15rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={got}
                  className=" w-[15rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={love}
                  className=" w-[15rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://m.media-amazon.com/images/I/61OmlO9stnL.jpg"
                  className=" w-[15rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://m.media-amazon.com/images/I/71NnJU9liHL._SL1500_.jpg"
                  className=" w-[15rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.posteritati.com/posters/000/000/053/631/doctor-strange-md-web.jpg"
                  className=" w-[15rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.posteritati.com/posters/000/000/065/196/doctor-strange-in-the-multiverse-of-madness-md-web.jpg"
                  className=" w-[15rem] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              {/* </div> */}
            </Splide>
          </div>

          {/* Universes */}
          <div className="flex flex-col mt-[7%] ms-[130px]">
            <p className="text-lg mb-6  text-white font-bold">Top Universes</p>
            <div className="w-full max-w-[1400px] mx-0">
              <Splide
                options={{
                  type: "loop",
                  perPage: 7,
                  gap: "0.8rem",
                  pagination: false,
                  arrows: true,
                  autoplay: true,
                  interval: 4000,
                }}
                className=""
              >
                <SplideSlide>
                  <div className="w-[153px] h-[153px] bg-white rounded-full overflow-hidden">
                    <NavLink to='/marvelpage'><img
                      src="https://static.cdnlogo.com/logos/m/90/marvel.png"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    /></NavLink>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-[153px] h-[153px] bg-white rounded-full overflow-hidden">
                    <img
                      src={f}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-[153px] h-[153px] bg-white rounded-full overflow-hidden">
                    <img
                      src={l}
                      className="w-full h-full object-cover scale-150 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-[153px] h-[153px] bg-white rounded-full overflow-hidden">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-[153px] h-[153px] bg-white rounded-full overflow-hidden">
                    <img
                      src={g}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-[153px] h-[153px] bg-white rounded-full overflow-hidden">
                    <img
                      src="https://scontent-pnq1-2.xx.fbcdn.net/v/t39.30808-6/357071578_798819218274739_638570600682846263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=h9d2qtuPiggQ7kNvgGdGJTk&_nc_zt=23&_nc_ht=scontent-pnq1-2.xx&_nc_gid=AjeQtDvmiO11fvyijPloMs2&oh=00_AYBBLvprDfTamZKYp1fZd9XYjzh_H9ltobtSogX7AuJYSA&oe=6797DFF8"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-[153px] h-[153px] bg-white rounded-full overflow-hidden">
                    <img
                      src="https://images.seeklogo.com/logo-png/13/1/star-wars-logo-png_seeklogo-131743.png?v=1957936112895841208"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-[153px] h-[153px] bg-white rounded-full overflow-hidden">
                    <img
                      src="https://seekvectors.com/storage/images/The%20boys%20logo-01.svg"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>

          {/* Marvel */}
          <div className="relative flex flex-col ms-[130px] ">
            <p className="text-lg my-5 text-white  font-bold">Marvel Movies</p>
            <Splide
              options={{
                type: "loop",
                perPage: 7,
                gap: "1rem",
                pagination: false,
                arrows: true,
                autoplay: true,
                interval: 3000,
              }}
              className="h-[300px] "
            >
              {/* <div className="flex flex-row gap-2 h-[300px] overflow-x-auto overflow-y-hidden"> */}
              <SplideSlide>
                <img
                  src="https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 transition-all cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.marvel.com/content/1x/guardiansofthegalaxyvolume3_lob_crd_03.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.marvel.com/content/1x/thorragnarok_lob_crd_03_0.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://m.media-amazon.com/images/I/51HUrY93cwL.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.marvel.com/content/1x/thunderbolts_lob_crd_03.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.marvel.com/content/1x/antmanandthewaspquantumania_lob_crd_03.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.marvel.com/content/1x/moonknight_lob_crd_05.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.marvel.com/content/1x/hawkeye_lob_crd_04.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.marvel.com/content/1x_masonry/blackpantherwakandaforever_lob_crd_05.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.marvel.com/content/1x/spider-mannowayhome_lob_crd_03.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.marvel.com/content/1x/shangchi_lob_crd_07.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.marvel.com/content/1x/eternals_lob_crd_06.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://m.media-amazon.com/images/I/71NnJU9liHL._SL1500_.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.posteritati.com/posters/000/000/053/631/doctor-strange-md-web.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.posteritati.com/posters/000/000/065/196/doctor-strange-in-the-multiverse-of-madness-md-web.jpg"
                  className=" w-[202px] h-[300px] hover:scale-105 cursor-pointer"
                />
              </SplideSlide>
              {/* </div> */}
            </Splide>

            <div className="flex flex-row justify-center items-center relative bg-cover bg-center">
              <div
                className="absolute inset-0 bg-black opacity-25 pointer-events-none"
                style={{
                  backgroundImage:
                    "url('https://data1.ibtimes.co.in/en/full/673796/padmavati.jpg?h=450&l=50&t=40')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/5"/>
              <div className="mt-5 z-10">
                <img
                  src="https://www.tallengestore.com/cdn/shop/products/Padmaavat-DeepikaPadukone-BollywoodHindiMoviePoster_054a5da2-fa03-4002-8b57-907197b4bc6a.jpg?v=1625220931"
                  alt="Nothing here..."
                  className="border-2 w-[18rem] h-full hover:scale-105"
                ></img>
              </div>

              <div className=" my-20 mx-20 z-10">
                <p
                  style={{
                    letterSpacing: "0.1rem",
                  }}
                  className="text-8xl font-sans font-bold text-white   uppercase shadow-md "
                >
                  Padmaavat
                </p>
                <p className="text-1xl pt-2 w-[550px] font-serif font-bold text-gray-200 ">
                  Padmavat is a fictional story about the queen of Chittor,
                  Padmavati, and the Delhi Sultan Alauddin Khalji. It was
                  written in 1540 by the Sufi poet Malik Muhammad Jayasi in the
                  Hindustani language of Awadhi.
                </p>
                <div className="flex gap-5">
                  <button className="text-white flex gap-2 hover:scale-105 bg-red-600 px-5 rounded-md py-1 mt-5 font-bold">
                    <ShoppingCart className="fill-white" /> <p>Buy</p>
                  </button>
                  <button className="text-white bg-red-600 px-5 hover:scale-105 rounded-md py-1 mt-5 font-bold flex gap-2">
                    <HandCoins />
                    <p>Rent</p>
                  </button>
                </div>
              </div>
              {/* <img className="w-full absolute  h-[90%] ms-28" src={inter} alt="Not Found" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
