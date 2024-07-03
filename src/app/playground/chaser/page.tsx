"use client";

import { useState, useEffect } from 'react';


function randomColor(){
    return "hsl(" + (Math.random() * 360 % 360) + ", 100%, 50%)";
}

function ChaserBox({ x , y }: {x:number, y:number}) {
    let [box_color, setBoxColor] = useState("black");

    const color_option = ["black", "blue"];

    const width = 100;
    const height = 100;

    x = x - (width / 2);
    y = y - (height / 2);

    useEffect(() => {
        const id = setInterval(() => {
            setBoxColor(randomColor())
        }, 300);
        return () => clearInterval(id);
    }, [])

    return (
        <div style={{left: x, top: y, position: 'absolute', backgroundColor: box_color, width: width, height: height}}></div>
    );
}

const useMousePosition = () => {
    const [
      mousePosition,
      setMousePosition
    ] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const updateMousePosition = (ev: { clientX: number; clientY: number; }) => {
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

    const [chaser_position, setChaserPosition] = useState({"x": 0, "y": 0})

    useEffect(() => {
        const id = setInterval(() => {
            setChaserPosition({"x": mousePosition.x, "y": mousePosition.y})
        }, 300);

        console.log(`Setting chaser position to ${chaser_position}`)
        return () => clearInterval(id);
    }, [])


    return (
        <main>
            <ChaserBox x={mousePosition.x} y={mousePosition.y}/>
        </main>
    );
}
