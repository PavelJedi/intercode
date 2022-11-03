import bmw from "../img/bmwx5.jpeg";
import bmw1 from "../img/bmwx3.jpeg";
import bmw2 from "../img/bmwii.jpeg";
import bmw3 from "../img/bmw4.jpeg";
import bmw4 from "../img/bmw1.jpeg";
import bmw5 from "../img/bmw7.jpeg";

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
    price: "64,040$",
    color: "red",
  },
  {
    id: 2,
    img: bmw1,
    model: "BMW X3",
    fuel: "Petrol",
    price: "63,190$",
    color: "red",
  },
  {
    id: 3,
    img: bmw2,
    model: "BMW iX",
    fuel: "Electric",
    price: "74,000$",
    color: "red",
  },
  {
    id: 4,
    img: bmw3,
    model: "BMW 4",
    fuel: "Petrol",
    price: "54,550$",
    color: "red",
  },
  {
    id: 5,
    img: bmw4,
    model: "BMW 1",
    fuel: "Petrol",
    price: "74,000$",
    color: "red",
  },
  {
    id: 6,
    img: bmw5,
    model: "BMW 7",
    fuel: "Electric",
    price: "From 99,900$",
    color: "red",
  },
];

const colourOptions = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
];

export default configuration;
export { list };
export { cars };
export { colourOptions };
