import logo from './logo.svg';
import './App.css';

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
  // const style = {color:'red', fontSize:'2.5rem', textTransform:'uppercase'}
  const style = {}
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizza =pizzaData
  const numPizza = pizza.length;

 
  return (
    <main className="menu">
      <h2>Our Menu 👍 </h2>
     
     {numPizza > 0 ?
     <> 
      <p>Authentic Italian cuisine.{numPizza} creative dishes to choose from. All from our stone oven, all organic, all delicious!
      </p>
     (<ul className='pizzas'>
        {pizza.map((pizza)=>(
      <Pizza pizzaObj={pizza} key={pizza.name} />
     ))
     }
      </ul>) 
      </>:(
        <p>
          we're still working on menu. please come back later.
      </p>)
     }
      
      
    </main>
  );
}

//another function
function Pizza({pizzaObj}) {
// if (pizzaObj.soldOut) return null
  return (
    <li className={"pizza" + (pizzaObj.soldOut ? ' sold-out' : '')}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {!pizzaObj.soldOut && <span>{pizzaObj.price +3}</span>}
        <span>{pizzaObj.soldOut ? 'Sold Out' : ''}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour =10;
  const closeHour =22;
  const isOpen = hour >= openHour && hour <= closeHour;
  
  return (
    <footer className="footer">

     {isOpen?(
     <div className='order'>
      <p>
      We're open until {closeHour}:00 GMT+1. Come visit us or order online.
      </p>
      <button className='btn'>Order Now</button>
     </div>):(
      <span>
        We're closed. Please come back between {openHour}:00 GMT+1 and {closeHour}:00 GMT+1.
      </span>
     )}
     
    </footer>
  );
}

export default App;
