# React-Basics

> [What are React Components?](#what-are-react-components)

> [What is JSX](#what-is-jsx)

> [What is props](#what-is-props)

> [Rendering Lists in React using map()](<#rendering-lists-in-react-using-map()>)

> [Conditional Rendering using && operator](#conditional-rendering-using-&&-operator)

> [Conditional Rendering using Ternary operator](#conditional-rendering-using-ternary-operator)

> [Conditional Rendering using multiple returns](#conditional-rendering-using-multiple-returns)

> [Handling Events in React](#state)

> [State](#how-to-create-a-state-variable-using-the-usestate-hook-in-react?)

> [How to create a state variable using the useState hook in React?](#mechanics-of-state)

> [Mechanics of state](#guidelines-for-using-state)

> [Guidelines for Using State](#state-vs-props)

<details>
  <summary>## What are React Components?</summary>
What are React Components

- React applications are totally made out of componenets.

- React components are like building blocks for user interface in react. It takes all the components and combine them together to build one single webpage UI.
  i.e React renders for each of the componenet and all of them together make up the UI.

- Components can be said as a piece of ui.

Each componenet has its own data, javascript code, and logic.

> Componenets can be reuse, nested inside each other, and pass data between them.

> Components can only return one element at a time, that's why we need to wrap them up under one div tag

</details>

## What is JSX

Component contains its own data, logic, and appearance.
Because if a component is a piece of the user interface, it means that we must be able to describe exactly what that component looks like. And so that's where JSX comes into play.

JSX is a declarative syntax that we use to describe what components look like and how they work based on their data and logic. Each component must return one block of JSX, which React will then use to render the component on the UI. JSX is an extension of JavaScript, which allows us to combine parts of HTML, CSS, and JavaScript all into one block of code.

We can write HTML and embed some pieces of JavaScript where necessary and we can even reference other React components so that we can then combine nest and reuse multiple components. JSX is just an extension of JavaScript, which means that there is a simple way of converting JSX to JavaScript. This is done by a tool called Babel, which was automatically included in our application by Create-React-App.
JSX is a declarative syntax.

In the imperative approach, we basically tell the browser exactly how to do things.
a declarative approach is to simply describe what the UI should look like at all times, always based on the current data that's in the component.
We use JSX to describe the UI based on props and state. So the data that's currently in the component and all that happens without any DOM manipulation at all.

So, there are no Query selectors, no ad event listeners, no class list, no text content properties anywhere to be seen here because in fact, React is basically a huge abstraction away from the DOM we use JSX to tell React what we want to see on the screen but not how to achieve it step-by-step. React can figure that out on its own.

## What is props

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

- The ternary operator can be used for conditional rendering in React.
- The ternary operator has three parts: a condition, a result if true, and a result if false.
- Using the ternary operator allows for displaying an alternative message or JSX element.
- If-else statements cannot be used for conditional rendering in JSX because they do not produce a value.
- The ternary operator is a preferred method for conditional rendering over the && operator.

## Conditional Rendering using multiple returns

- Conditional rendering with multiple returns allows components to return different JSX blocks based on a condition.
- Multiple returns can be used by adding another return keyword in the component.
- The two returns cannot happen at the same time.

💡 We can use the if keyword to conditionally render JSX or components.

💡 Early return with null can be used to prevent rendering certain components based on a condition.

💡 The return operator should be used whenever there is a need to return JSX based on a condition.

## Handling Events in React

Handling events in React is done in a declarative way using event listeners attached to specific elements. Instead of using addEventListener, React uses props like onClick to specify the event and the function to be executed.

💡 React uses a declarative approach to handle events, avoiding the use of addEventListener.

💡 In React, event listeners are attached directly to the element where the event occurs using props like onClick.

💡 Event names in React are prefixed with "on" and written in camel case.

💡 Event handler functions should not be called directly but passed as function values to the event listener prop.

💡 It is common practice to create separate event handler functions within the React component.

💡 State is needed to make meaningful changes in React components, such as updating the value of a step.

## State

> Understanding state mechanics unlocks the power of React development.

🔄 State is the most crucial concept in React, serving as the memory of a component to hold data over time.

🛠️ State allows components to store and manage information that needs to be persisted throughout their lifecycle.

💡 State variables are defined within a component. State allows developers to update the component's view and persist local variables.

🔄 Updating a piece of state triggers React to re-render the component, creating an updated view in the user interface.

🧩 State is dynamic and enables developers to make their applications interactive by responding to user actions.

## How to create a state variable using the useState hook in React?

```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

🏗️ To create a state variable, use the useState function provided by React.

🔄 The useState function returns an array with the default value of the state variable and a function to update the state.

🖥️ Use the state variable in the JSX code of the component.

⬆️ Update the state variable in an event handler using the set function.

🐛 Prevent bugs by adding conditions to the event handlers that update the state.

💡 Hooks in React, such as useState, should only be called at the top level of the component function.

- React recommends updating state using the setter function instead of manually updating it.
- Manually updating state variables may not trigger a re-render in React.
- Treat state as immutable and use the tools provided by React to update it.

## Mechanics of state

- React updates a component view by re-rendering the entire component whenever the underlying data changes.
- State is preserved throughout re-renders and is updated using the useState hook.
- When state is updated, the component is automatically re-rendered.
- React reacts to state changes by re-rendering the user interface.

> Updating state based on current state:

Updating state based on the current state can lead to unexpected behavior. It is recommended to use a callback function instead.

![image](https://github.com/iAdityaNarayanT/React-Basics/assets/98219031/da0916a4-4811-4601-9c50-460cce20e1da)

🚫 Avoid updating state directly based on the current state, as it can lead to unpredictable results.

🆗 When updating state without considering the current state, it is safe to pass the new value directly.

## Guidelines for Using State

With state, we view Ul as a reflection of data changing over time. We describe that reflection of data using `state, event handlers, and JSX.`

📌 Create a new state variable for any data that a component should keep track of over time.

📌 Use state when you want something in a component to be dynamic.

📌 Update a component's state to change its appearance or displayed data.

📌 Imagine a component's view as a reflection of state changing over time.

📌 Avoid using state for variables that should not trigger a re-render.

📌 Use regular variables defined with "const" for variables that do not need state.

## State vs props

![image](https://github.com/iAdityaNarayanT/React-Basics/assets/98219031/1082674d-d29c-4d1f-913f-e89a85fbf943)

## Thinking in React

> Thinking in React is about having a good understanding of how to use React tools, such as components, state, props, and data flow.
> It involves breaking down the UI into components, building a static version of the application, considering state management, and understanding how data flows through the app.

💡 Thinking in React means having a good mental model of how to use React tools.

💡 It involves breaking the UI into components and establishing the component tree.

💡 Building a static version of the application helps to focus on coding upfront before worrying about state and interactivity.

💡 State management is an important aspect of thinking in React.

💡 Data flow through the application should be considered, including one-way data flow and child-to-parent communication.

💡 Thinking in React helps with designing reusable components and understanding how to make data flow through the app.

![image](https://github.com/iAdityaNarayanT/React-Basics/assets/98219031/d121aa36-ae87-420b-aa80-b928f6e2ecb5)

## State When and where?

📌 State management involves creating new pieces of state, determining the type of state needed, deciding where to place the state, and managing data flow.

📌 Local state is specific to one or a few components, while global state is accessible to multiple components in the entire app.

📌 It is recommended to start with local state and only use global state when necessary.

📌 A flow chart can guide the decision process of when to create state and where to place it.

📌 State can be derived from existing state or props, and updating state usually triggers component re-rendering.

📌 State can be kept within the current component, passed down to child components using props, or lifted up to a common parent component.

![image](https://github.com/iAdityaNarayanT/React-Basics/blob/3f2dd5cea5a66b45406888fe97f3c506d419a4a8/assets/React%20state%20mgmt.png)

## Derived State

💡 Derived state is computed from another existing piece of state or props.

💡 It is used to avoid creating additional state variables that depend on the same data.

💡 Updating derived state is automatic and does not require manual syncing.

💡 Derived state can be derived from the existing state or props in a component.

💡 It is recommended to use derived state when one state can easily be computed from another, to avoid unnecessary complexity and potential errors.

💡 The cart state in the example serves as a single source of truth for the numItems and totalPrice state variables.
