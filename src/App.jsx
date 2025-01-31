import "./App.css";
import ColorBoxes from "./components/colorgrid/ColorBoxes";
// import Chicken from "./Chicken";
// import Greeter from "./Greeter";
// import Die from "./Die";
// import ListPicker from "./ListPicker";
// import DoubleDice from "./DoubleDice";
// import Heading from "./Heading";
// import ColorList from "./ColorList";
// import Slots from "./Slots";
// import ShoppingList from "./ShoppingList";
// import PropertyList from "./PropertyList";
// import Clicker from "./Clicker";
// import ColorBox from "./ColorBox";
// import Counter from "./Counter"
// import Toggler from "./Toggler";
// import ToggleCounter from "./ToggleCounter";

// const data = [
//   { id: 1, item: "eggs", quantity: 12, completed: false },
//   { id: 2, item: "milk", quantity: 1, completed: true },
//   { id: 3, item: "chicken breasts", quantity: 4, completed: false },
//   { id: 4, item: "carrots", quantity: 6, completed: true }
// ];

// const propertiesData = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 }
// ];

const colorsData = ["#E53935", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB38", "#FFC107", "#FF9800", "#FF5722"];


function App() {
  return (
    <div>
      <h1 style={{ paddingRight: "2rem" }}>Random Color Box Grid</h1>
      <ColorBoxes colorsList={colorsData} />
      {/* <ColorBox colorsList={colorsData} /> */}

      {/* <Counter /> */}
      {/* <Toggler /> */}
      {/* <ToggleCounter /> */}

      {/* <Clicker message="HI!!!!" buttonText="Please Click Me" />
      <Clicker message="Please Stop Clicking Me!" buttonText="Do Not Click" /> */}

      {/* <Chicken /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <PropertyList properties={propertiesData} /> */}

      {/* <Slots /> */}

      {/* <Slots val1="🍒" val2="🍒" val3="🍒" /> */}
      {/* <Slots val1="🍒" val2="🍌" val3="🍒" /> */}


      {/* <Heading color="magenta" text="Welcome!" fontSize={50} />
      <Heading color="blue" text="Hello there!" fontSize={100} />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["red", "pink", "purple", "teal"]} /> */}

      {/* <ListPicker values={[1, 2, 3]} /> */}
      {/* <Greeter person="Bill" from="Colt" />
      <Greeter person="Todd" />
      <Greeter from="Colt" />
      <Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10} /> */}
    </div>
  );
};

export default App;
