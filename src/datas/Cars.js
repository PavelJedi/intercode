import bmw from "../img/bmwx5.jpeg";
import bmw1 from "../img/bmwx3.jpeg";
import bmw2 from "../img/bmwii.jpeg";
import bmw3 from "../img/bmw4.jpeg";
import bmw4 from "../img/bmw1.jpeg";
import bmw5 from "../img/bmw7.jpeg";
import color1 from "../img/color1.webp";
import color2 from "../img/color2.webp";
import color3 from "../img/color3.webp";
import color4 from "../img/color4.webp";
import wheel from "../img/wheel.webp";
import wheel1 from "../img/wheel1.webp";
import wheel2 from "../img/wheel2.webp";
import bmwx5white from "../img/bmwx5white.png";
import bmwx5black from "../img/bmwx5black.png";
import bmwx5grey from "../img/bmwx5grey.png";
import bmwx5blue from "../img/bmwx5blue.png";

const configuration = [
  {
    id: 1,
    name: "BMW X5",
    img: "x5",
    desc: ["option1", "option2", "option3"],
  },
  {
    id: 2,
    name: "BMW X3",
    img: "x3",
    desc: ["option1", "option2", "option3"],
  },
  {
    id: 3,
    name: "BMW iX",
    img: "ix",
    desc: ["option1", "option2", "option3"],
  },
];

const list = [
  {
    id: 1,
    title: "The BMW Difference",
    items: [
      "My BMW App",
      "BMW All-Electric",
      "Plug-in Hybryd Electric",
      "Concept Vehicles",
    ],
  },
  {
    id: 2,
    title: "Partnerships",
    items: ["My BMW App", "BMW All-Electric", "Plug-in Hybryd Electric"],
  },
  {
    id: 3,
    title: "Online Shopping Tools",
    items: [
      "My BMW App",
      "BMW All-Electric",
      "Plug-in Hybryd Electric",
      "Concept Vehicles",
    ],
  },
  {
    id: 4,
    title: "Social",
    items: [
      "My BMW App",
      "BMW All-Electric",
      "Plug-in Hybryd Electric",
      "Concept Vehicles",
    ],
  },
];

const cars = [
  {
    id: 1,
    img: bmw,
    model: "BMW X5",
    fuel: "Petrol",
    price: 64040,
    color: "white",
    wheel: "slim",
    maxSpeed: 240,
  },
  {
    id: 2,
    img: bmw1,
    model: "BMW X3",
    fuel: "Petrol",
    price: 63190,
    color: "white",
    wheel: "slim",
    maxSpeed: 220,
  },
  {
    id: 3,
    img: bmw2,
    model: "BMW iX",
    fuel: "Electric",
    price: 74000,
    color: "red",
    wheel: "slim",
    maxSpeed: 230,
  },
  {
    id: 4,
    img: bmw3,
    model: "BMW 4",
    fuel: "Petrol",
    price: 54550,
    color: "white",
    wheel: "slim",
    maxSpeed: 270,
  },
  {
    id: 5,
    img: bmw4,
    model: "BMW 1",
    fuel: "Petrol",
    price: 74000,
    color: "white",
    wheel: "slim",
    maxSpeed: 210,
  },
  {
    id: 6,
    img: bmw5,
    model: "BMW 7",
    fuel: "Electric",
    price: 99900,
    color: "white",
    wheel: "slim",
    maxSpeed: 280,
  },
];

const colors = [
  { id: 1, pic: color1, cost: 1000, colorName: "white" },
  { id: 2, pic: color2, cost: 2000, colorName: "black" },
  { id: 3, pic: color3, cost: 3000, colorName: "grey" },
  { id: 4, pic: color4, cost: 4000, colorName: "blue" },
];

const wheels = [
  { id: 1, img: wheel, cost: 1000, wheelName: "wide" },
  { id: 2, img: wheel1, cost: 2000, wheelName: "slim" },
  { id: 3, img: wheel2, cost: 3000, wheelName: "clear" },
];

const carColors = [
  {
    id: 1,
    model: "BMW X5",
    image: {
      white: bmwx5white,
      black: bmwx5black,
      grey: bmwx5grey,
      blue: bmwx5blue,
    },
  },
];

export default configuration;
export { list };
export { cars };
export { colors };
export { wheels };
export { carColors };
