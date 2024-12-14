import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//this is from data.js (does not exist anymore)
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//react code
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1 className="header">Fast React Pizza Co.</h1>;
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizzas) => {
          //The reason why we are using map instead of forEach here is because we need some JSX inside <ul> and map function provides that because it creates a new array
          return <Pizza pizzaObj={pizzas} key={pizzas.name} />; //key is a unique identifier for each pizza component
        })}
        ;
      </ul>
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <li>
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <div>
          <h3>{props.pizzaObj.name}</h3>
          <p>{props.pizzaObj.ingredients}</p>
          <span>{props.pizzaObj.price}</span>
        </div>
      </li>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);

  const openAt = 12;
  const closesAt = 22;
  const isOpen = hour >= openAt && hour <= closesAt;
  console.log(isOpen);
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open!
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
