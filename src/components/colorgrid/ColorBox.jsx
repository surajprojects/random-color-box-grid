import { useState } from "react";

function randomChoice(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

export default function ColorBox({ colorsList }) {

    let [color, setColor] = useState(randomChoice(colorsList));

    let styles = {
        width: "120px",
        height: "120px",
        border: "1px solid black",
        borderRadius: "5%",
        margin: "0.1rem",
        backgroundColor: color
    };

    let changeColor = () => {
        const randomColor = randomChoice(colorsList);
        setColor(randomColor);
    }

    return (
        <div style={styles} onClick={changeColor}></div>
    )
}