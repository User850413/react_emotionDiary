import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

import Button from "./components/Button";
import Header from "./components/Header";

import { Routes, Route, Link, useNavigate } from "react-router-dom";

import { getEmotionImage } from "./util/get-emotion-images";

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button
        text={"default"}
        onClick={() => {
          console.log("hello");
        }}
      />
      <Button
        text={"positive"}
        onClick={() => {
          console.log("hello");
        }}
        type={"POSITIVE"}
      />
      <Button
        text={"negative"}
        onClick={() => {
          console.log("hello");
        }}
        type={"NEGATIVE"}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;

