import "./Toggler.css";
import { useState } from "react";

export default function ToggleCounter() {
    const [isHappy, setIsHappy] = useState(true);
    const togglerIsHappy = () => {
        setIsHappy(!isHappy);
    };
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 2);
    }
    return (
        <div>
            <p className="Toggler" onClick={togglerIsHappy}>{isHappy ? "😊" : "😭"}</p>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
        </div>
    );
};