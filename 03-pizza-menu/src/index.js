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

//use {} to enter JS mode
// <> </> is a react fragment that is used to group data as one parent. We usually use divs but that is not always possible (Due to formatting issues)
function Menu() {
  const pizza = pizzaData;
  const pizzaLen = pizza.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaLen > 0 ? (
        <>
          <Description />
          <ul className="pizzas">
            {pizza.map((pizzas) => (
              //The reason why we are using map instead of forEach here is because we need some JSX inside <ul> and map function provides that because it creates a new array
              <Pizza pizzaObj={pizzas} key={pizzas.name} /> //key is a unique identifier for each pizza component
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu, please come back later!</p>
      )}
    </main>
  );
}

function Description() {
  return (
    <p>
      Authentic Italian cuisine. 6 creative dishes to choose from. All from our
      stone oven, all organic, all delicious.
    </p>
  );
}

function Pizza({ pizzaObj }) {
  //destructuring the props and just using the item that we need

  //Here, we are conditionally checking and adding class to a specific pizza object by entering JS mode. All classes have pizza class but only sold out pizzas need to be given sold-out class
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <li>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.soldOut ? "Sold out" : "$" + pizzaObj.price}</span>
        </div>
      </li>
    </div>
  ); //here we knew that we wanted a span element but didn't know whether its sold out or not, so we used ternary inside the span element instead of separately creating a span for both true/false conditions
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);

  const opensAt = 1;
  const closesAt = 9;
  const isOpen = hour >= opensAt && hour <= closesAt;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order opensAt={opensAt} closesAt={closesAt} />
      ) : (
        <p>
          We are happy to welcome you between {opensAt}:00 and {closesAt}:00!
        </p>
      )}
    </footer>
  );
}
function Order({ opensAt, closesAt }) {
  return (
    <div className="order">
      <p>
        We're open from {opensAt}:00 to {closesAt}:00! Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
