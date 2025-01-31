// export default function Slots({ val1, val2, val3 }) {
//     const isWinner = val1 === val2 && val1 === val3;
//     return (
//         <div>
//             <h1>{val1} {val2} {val3}</h1>
//             <h2 style={{ color: isWinner ? "green" : "red" }}>{isWinner ? "You Win!" : "You Lose :("}</h2>
//             {isWinner && <h3>Congrats!!!</h3>}
//         </div>
//     )
// }

export default function Slots() {
    const rand1 = Math.floor(Math.random() * 2) + 1;
    const rand2 = Math.floor(Math.random() * 2) + 1;
    const rand3 = Math.floor(Math.random() * 2) + 1;
    const isWinner = rand1 === rand2 && rand1 === rand3;
    return (
        <div>
            <h1>{rand1 === 1 ? "🍒" : "🍌"} {rand2 === 1 ? "🍒" : "🍌"} {rand3 === 1 ? "🍒" : "🍌"}</h1>
            <h2 style={{ color: isWinner ? "green" : "red" }}>{isWinner ? "You Win!" : "You Lose :("}</h2>
            {isWinner && <h3>Congrats!!!</h3>}
        </div>
    )
}