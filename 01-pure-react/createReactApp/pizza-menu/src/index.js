import React from "react";
import ReactDOM from "react-dom/client";  //REACT V18

// REACT V17
// import ReactDOM from "react-dom";   

function App(){
    return <h1>Hello React!</h1>;
}

//! React v17
// React.render(<App/>);


//React v18
// We can simply activate strict mode by, instead of directly rendering the app component as a root component, 
// wrapping it here into a strict mode component <React.StrictMode> 

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App/>
    </React.StrictMode>);

    
// Strict Mode during development will render all components twice in order to find certain bugs. And also React will check if we're using outdated parts of the React API. So strict mode is nothing groundbreaking but it's still a good idea to always activate it when we develop React applications.