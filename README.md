# React-Basics

## What are React Componenets?

React applications are totally made out of componenets.
React componets are like building blocks for user interface in react.
React takes all the components and combine them together to build one single webpage UI.
i.e React renders for each of the componenet and all of them together make up the UI.
Components can be said as a piece of user interface.
Each componenet has its own data, javascript code, and logic.
Componenets can be reuse, nested inside each other, and pass data between them.
Components can only return one element at a time, that's why we need to wrap them up under one div tag

## What is JSX ?

Component contains its own data, logic, and appearance.
Because if a component is a piece of the user interface, it means that we must be able to describe exactly what that component looks like. And so that's where JSX comes into play.

JSX is a declarative syntax that we use to describe what components look like and how they work based on their data and logic. Each component must return one block of JSX, which React will then use to render the component on the UI. JSX is an extension of JavaScript, which allows us to combine parts of HTML, CSS, and JavaScript all into one block of code.

We can write HTML and embed some pieces of JavaScript where necessary and we can even reference other React components so that we can then combine nest and reuse multiple components. JSX is just an extension of JavaScript, which means that there is a simple way of converting JSX to JavaScript. This is done by a tool called Babel, which was automatically included in our application by Create-React-App.
JSX is a declarative syntax.

In the imperative approach, we basically tell the browser exactly how to do things.
a declarative approach is to simply describe what the UI should look like at all times, always based on the current data that's in the component.
We use JSX to describe the UI based on props and state. So the data that's currently in the component and all that happens without any DOM manipulation at all.

So, there are no Query selectors, no ad event listeners, no class list, no text content properties anywhere to be seen here because in fact, React is basically a huge abstraction away from the DOM we use JSX to tell React what we want to see on the screen but not how to achieve it step-by-step. React can figure that out on its own.

## What is props ?

Props in React are a way to pass data between components, serving as a communication channel from parent to child components.
Without props, components would be identical. Now, with props, customization becomes possible by passing data like image link, name value, and price.

Defining Props: Props are defined in two steps - first by passing them into the component, and second by receiving them within the component.

Receiving Props in Child Component: The child component receives props through a parameter, and these props can be accessed and utilized to replace static values in the component.

🔀 Props are like a communication channel between parent and child components.

💻 Props allow us to customize components by passing data.

🎛️ Props are defined by passing them into the component and then receiving them inside the component.

🔧 The order in which props are passed is irrelevant.

🧮 Props can be used to pass any type of data, not just strings or numbers.

🚀 Props are a fundamental concept in React and allow for powerful customization of components.

JavaScript Mode for Non-String Props: To avoid unexpected behavior, it's crucial to use JavaScript mode when passing non-string values as props, ensuring correct data types.
