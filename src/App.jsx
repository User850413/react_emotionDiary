import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";

// import components
import Button from "./components/Button";
import Header from "./components/Header";

// import resources
import { getEmotionImage } from "./util/get-emotion-images";

// import CSS
import "./App.css";

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;

