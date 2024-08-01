"use client";

import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

function randomColor() {
  return "hsl(" + ((Math.random() * 360) % 360) + ", 100%, 50%)";
}

function ChaserBox() {
  const mousePosition = useMousePosition();

  let [color, setColor] = useState("black");

  const width = 100;
  const height = 100;

  const box_center_position = {
    x: mousePosition.x - width / 2,
    y: mousePosition.y - height / 2,
  };

  box_center_position.x =
    box_center_position.x < 50 ? 50 : box_center_position.x;
  box_center_position.y =
    box_center_position.y < 50 ? 50 : box_center_position.y;

  useEffect(() => {
    const id = setInterval(() => {
      setColor(randomColor());
    }, 200);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        left: box_center_position.x,
        top: box_center_position.y,
        position: "absolute",
        backgroundColor: color,
        width: width,
        height: height,
      }}
    ></div>
  );
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: { clientX: number; clientY: number }) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default function FlashyColors() {
  return (
    <main>
      <ChaserBox />
    </main>
  );
}
