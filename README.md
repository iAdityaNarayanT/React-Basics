# React-Basics

## What are React Componenets?

* React applications are totally made out of componenets.

* React components are like building blocks for user interface in react. It takes all the components and combine them together to build one single webpage UI.
i.e React renders for each of the componenet and all of them together make up the UI.

*Components can be said as a piece of user interface.

Each componenet has its own data, javascript code, and logic.

>Componenets can be reuse, nested inside each other, and pass data between them.
>
>Components can only return one element at a time, that's why we need to wrap them up under one div tag

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

🔀 Props are like a communication channel between parent and child components. Props are like settings that allow a parent component to control the appearance and behavior of its child component.

💻 Props allow us to customize components by passing data.

🎛️ Props are defined by passing them into the component and then receiving them inside the component.

🔧 The order in which props are passed is irrelevant.

🫡React follows a one-way data flow, where data can only be passed from parent to child components using props. One-way data flow makes React applications more predictable, easier to understand, and more efficient.

🧮 Props can be any type of value, including single values, arrays, functions, and even other React components.

🚀 Props are immutable and cannot be changed by the child component.

> Destructuring props allows us to directly receive the props object into a component instead of writing props dot whatever else. It makes it easier to see which props a component will receive.

## Rendering Lists in React using map()

Rendering lists in React involves creating a component for each element in an array. This can be achieved using the map method in JavaScript.

🍕 We can render lists in React by mapping over an array and creating a component for each element.

🔄 The map method in JavaScript is used to loop over the array and create a new array with the desired components.

💡 It is common practice to pass the entire object as a prop to the component and extract the necessary information inside the component.

🚫 Each item in the rendered list should have a unique key property to avoid warnings and optimize performance.

🖍️ Semantic markup, such as using `<ul> and <li> elements`, is important for creating well-structured lists in React.

💻 Applying appropriate class names can help with styling and organizing the rendered list.

✂️ Rendering lists in React is a fundamental technique that will be used frequently throughout the course.

## Conditional Rendering using && operator

The && operator is demonstrated as a way to conditionally render JSX based on a certain condition.

👉 Conditional rendering is the process of rendering UI elements or components based on a condition.

👉 The && operator can be used for conditional rendering in React by taking advantage of short circuiting.

👉 When a truthy value is passed to the && operator, the second part of the operator is returned.

👉 When a falsey value is passed to the && operator, the second part of the operator is not executed and nothing is rendered.

👉 It is important to ensure that the condition used with the && operator evaluates to a true or false value, rather than a number, to avoid unexpected rendering results.

👉 While the && operator can be convenient for simple conditional rendering, the ternary operator is often preferred for more complex conditions.

## Conditional Rendering using Ternary operator

Example:

```
const ComponentA = () => <h1>Component A</h1>;

const ComponentB = () => <h1>Component B</h1>;

const renderComponent = isComponentA ? <ComponentA /> : <ComponentB />;`
```
* The ternary operator can be used for conditional rendering in React.
* The ternary operator has three parts: a condition, a result if true, and a result if false.
* Using the ternary operator allows for displaying an alternative message or JSX element.
* If-else statements cannot be used for conditional rendering in JSX because they do not produce a value.
* The ternary operator is a preferred method for conditional rendering over the && operator.

## Conditional Rendering using multiple returns
* Conditional rendering with multiple returns allows components to return different JSX blocks based on a condition.
* Multiple returns can be used by adding another return keyword in the component.
* The two returns cannot happen at the same time.
  
💡 We can use the if keyword to conditionally render JSX or components.

💡 Early return with null can be used to prevent rendering certain components based on a condition.

💡 The return operator should be used whenever there is a need to return JSX based on a condition.

