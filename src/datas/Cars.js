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
import bmwx3white from "../img/bmwx3white.png";
import bmwx3black from "../img/bmwx3black.png";
import bmwx3grey from "../img/bmwx3grey.png";
import bmwx3blue from "../img/bmwx3blue.png";
import bmwixwhite from "../img/bmwixwhite.png";
import bmwixblack from "../img/bmwixblack.png";
import bmwixgrey from "../img/bmwixgrey.png";
import bmwixblue from "../img/bmwixblue.png";
import bmwx4white from "../img/bmw4white.png";
import bmwx4black from "../img/bmw4black.png";
import bmwx4grey from "../img/bmw4grey.png";
import bmwx4blue from "../img/bmw4blue.png";
import bmw1white from "../img/bmw1white.png";
import bmw1black from "../img/bmw1black.png";
import bmw1grey from "../img/bmw1grey.png";
import bmw1blue from "../img/bmw1blue.png";
import bmw7white from "../img/bmw7white.png";
import bmw7black from "../img/bmw7black.png";
import bmw7grey from "../img/bmw7grey.png";
import bmw7blue from "../img/bmw7blue.png";


const configuration = [
  {
    id: 1,
    name: "BMW X5",
    img: "x5",
    desc: {
      fuel: "Petrol",
      year: 2020,
      eng: "Automatic",
    },
  },
  {
    id: 2,
    name: "BMW X3",
    img: "x3",
    desc: {
      fuel: "Petrol",
      year: 2021,
      eng: "Manual",
    },
  },
  {
    id: 3,
    name: "BMW iX",
    img: "ix",
    desc: {
      fuel: "Electric",
      year: 2022,
      eng: "Automatic",
    },
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
    items: ["BMW Motosport", "BMW Championship", "Monticello Motor Club"],
  },
  {
    id: 3,
    title: "Online Shopping Tools",
    items: [
      "Build Your Own",
      "Shop Pre-Owned Inventory",
      "Shop Online",
      "Find a BMW Center",
    ],
  },
  {
    id: 4,
    title: "Social",
    items: [
      "Build Your Own",
      "Shop Pre-Owned Inventory",
      "Shop Online",
      "Find a BMW Center",
    ],
  },
];

const cars = [
  {
    id: 1,
    img: bmwx5white,
    model: "BMW X5",
    fuel: "Petrol",
    price: 64040,
    color: "white",
    wheel: "slim",
    maxSpeed: 240,
  },
  {
    id: 2,
    img: bmwx3white,
    model: "BMW X3",
    fuel: "Petrol",
    price: 63190,
    color: "white",
    wheel: "slim",
    maxSpeed: 220,
  },
  {
    id: 3,
    img: bmwixwhite,
    model: "BMW iX",
    fuel: "Electric",
    price: 74000,
    color: "white",
    wheel: "slim",
    maxSpeed: 230,
  },
  {
    id: 4,
    img: bmwx4white,
    model: "BMW 4",
    fuel: "Petrol",
    price: 54550,
    color: "white",
    wheel: "slim",
    maxSpeed: 270,
  },
  {
    id: 5,
    img: bmw1white,
    model: "BMW 1",
    fuel: "Petrol",
    price: 74000,
    color: "white",
    wheel: "slim",
    maxSpeed: 210,
  },
  {
    id: 6,
    img: bmw7white,
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
  {
    id: 2,
    model: "BMW X3",
    image: {
      white: bmwx3white,
      black: bmwx3black,
      grey: bmwx3grey,
      blue: bmwx3blue,
    },
  },
  {
    id: 3,
    model: "BMW iX",
    image: {
      white: bmwixwhite,
      black: bmwixblack,
      grey: bmwixgrey,
      blue: bmwixblue,
    },
  },
  {
    id: 4,
    model: "BMW 4",
    image: {
      white: bmwx4white,
      black: bmwx4black,
      grey: bmwx4grey,
      blue: bmwx4blue,
    },
  },
  {
    id: 5,
    model: "BMW 1",
    image: {
      white: bmw1white,
      black: bmw1black,
      grey: bmw1grey,
      blue: bmw1blue,
    },
  },
  {
    id: 6,
    model: "BMW 7",
    image: {
      white: bmw7white,
      black: bmw7black,
      grey: bmw7grey,
      blue: bmw7blue,
    },
  },
];

export default configuration;
export { list };
export { cars };
export { colors };
export { wheels };
export { carColors };
