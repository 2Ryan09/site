"use client";

import { useState, useEffect } from 'react';


function randomColor(){
    return "hsl(" + (Math.random() * 360 % 360) + ", 100%, 50%)";
}

function ChaserBox({ x , y }: {x:number, y:number}) {
    let [box_color, setBoxColor] = useState(0);

    const color_option = ["black", "blue"];

    const width = 100;
    const height = 100;

    x = x - (width / 2);
    y = y - (height / 2);

    return (
        <div style={{left: x, top: y, position: 'absolute', backgroundColor: "blue", width: width, height: height}}></div>
    );
}

const useMousePosition = () => {
    const [
      mousePosition,
      setMousePosition
    ] = useState({ x: null, y: null });
  
    useEffect(() => {
      const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
      
      window.addEventListener('mousemove', updateMousePosition);
  
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);
  
    return mousePosition;
  };


export default function FlashyColors() {
    const mousePosition = useMousePosition();

    return (
        <main>
            <ChaserBox x={mousePosition.x} y={mousePosition.y}/>
        </main>
    );
}
