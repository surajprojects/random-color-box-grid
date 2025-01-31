import "./Toggler.css";
import { useState } from "react";

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const togglerIsHappy = () => {
        setIsHappy(!isHappy);
    };
    return (
        <p className="Toggler" onClick={togglerIsHappy}>{isHappy ? "😊" : "😭"}</p>
    );
};