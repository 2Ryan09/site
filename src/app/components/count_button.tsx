"use client";

import { useState } from "react";

export default function CountButton() {
    const [count, setCount] = useState(0);

    function handleCount() {
        setCount(count + 1);
        console.log(`I just updated the count to ${count}`)
    }

    return <button onClick={handleCount} className="rounded outline outline-offset-2 outline-blue-500">
        <p>Add!</p>
        <p>Count is now: {count}</p>
    </button>
}
