"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function addCount() {
        setCount(count + 1);
        console.log(`I just updated the count to ${count}`)
    }

    function resetCount() {
        setCount(0);
        console.log(`I just updated the count to ${count}`)
    }

    function subtractCount() {
        setCount(count - 1);
        console.log(`I just updated the count to ${count}`)
    }

    return <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
            <p>{count}</p>
        </div>
        <div>
            <button onClick={resetCount} className="p-2 text-white transition ease-in-out delay-150 bg-blue-500 rounded outline shadow-md outline-offset-2 outline-blue-500">
                <p>~Reset~</p>
            </button>
        </div>
        <div>
            <button onClick={addCount} className="p-2 text-white transition ease-in-out delay-150 bg-blue-500 rounded outline shadow-md outline-offset-2 outline-blue-500">
                <p>Add!</p>
            </button>
        </div>       
        <div>
            <button onClick={subtractCount} className="p-2 text-white transition ease-in-out delay-150 bg-blue-500 rounded outline shadow-md outline-offset-2 outline-blue-500">
                <p>Subtract!</p>
            </button>
        </div>
    </div>
}
