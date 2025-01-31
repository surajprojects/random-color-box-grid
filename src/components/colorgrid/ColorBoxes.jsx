import "./colorboxes.css"
import ColorBox from "./ColorBox";

export default function ColorBoxes({ colorsList, num = 25 }) {
    let boxes = [];
    for (let i = 0; i < num; i++) {
        boxes.push(<ColorBox colorsList={colorsList} />)
    }
    return (
        <div className="containerBox">
            {boxes}
        </div>
    );
}

