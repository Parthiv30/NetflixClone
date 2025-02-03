import SignUp from "./components/SignUp";
import MainPage from "./components/MainPage";
import Marvel from "./components/Marvel";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DAW from "./components/DAW";
import GOT from "./components/GOT";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}  />
          <Route path="/homepage" element={<MainPage />} />
          <Route path="/marvelpage" element={<Marvel />} />
          <Route path="/dawpage" element={<DAW />} />
          <Route path="/gotpage" element={<GOT />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
