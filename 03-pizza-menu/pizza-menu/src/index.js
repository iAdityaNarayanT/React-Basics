    import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"; 
import './index.css'



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
  

function App(){
    return (
        <div className="container"> 
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
    return ( <header className="header">
        <h1 style={style}>Fast React Pizza Co.</h1>
        </header>)
}


function Menu(){
return(
        <main className="menu">
<h1> Our Menu</h1>

<ul className="pizzas">{pizzaData.map((pizza)=>(<Pizza pizzaObj={pizza} key={pizza.name}/>))}</ul>

{/* <Pizza photoName='pizzas\salamino.jpg' name='Pizza Salamino' ingredients='Tomato, mozarella, and pepperoni' alt='salamino pizza' price={10}/>
<Pizza photoName='pizzas\funghi.jpg' name='Pizza Funghi' ingredients='Tomato, mozarella, mushrooms, and onion' alt='salamino pizza' price={12}/> */}
</main>)
}
function Pizza(props){
  console.log(props)
   return  (
   <div className="pizza">
    <img src={props.pizzaObj.photoName} alt={props.pizzaObj.alt}/> 
  <div> 
    <h2> {props.pizzaObj.name}  </h2>
    <p> {props.pizzaObj.ingredients}</p>
    <span>Price: {props.pizzaObj.price}</span>
    </div>
   </div>);
}

function Time(){
    // const [time, setTime]= useState(new Date().toLocaleTimeString())
    // useEffect(function(){
    //     setInterval(function(){
    //         setTime(new Date().toLocaleTimeString());
    //     }, 100)
    // })
    // return (<div> 
    //     <footer> It's {time} We are open</footer>
    // </div>)
    const hour= new Date().getHours();
    const openHours= 12;
    const closeHours=22;
    if(( hour>=openHours) && ( hour<closeHours) ){
        console.log("We are open!")
    }
    else{console.log("CLOSED!!!!")}
    return (<div> 
         <footer > It's {new Date().toLocaleTimeString()} We are open </footer>
           </div>)
    }

    
function Footer(){

    return (<footer className="footer"><Time/></footer>
        
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App/>
    </React.StrictMode>);


