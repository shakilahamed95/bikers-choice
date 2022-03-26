import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='questions-section'>
            <div className='question-container'>
                <h1> Q :How React works?</h1>
                <p>Ans :React is a  JavaScript library that  render each and every component in a website and show the output result in the browser.React creats a virtual DOM and keeps all the component in a website in that virtual DOM.If we change any data or information in any component then React creats a new vartual DOM with the changes data or information and compare this vartual DOM with the previous one.After completes the comparision React only update thoes component that make a change in their data or information but other component remain as same as it before.By using React we do not need to relod the page each and and every time any information change in a component.Thus React make a website work as single page application and make our website more fast.
                </p>
            </div>
            <div className='question-container'>
                <h1> Q :DIfference between Props and State</h1>
                <p>Ans :Props are used to communicate between components but States are used for rendering dynamic changes with the component.Props allows us to pass data from one component to other component but States holds information about the component.Props are immuatable but States are mutable.Props make component reuseable but States dose not have the ability to reuse the component.Props can not be change which means its are read only but States changes can be asynchronous. Stateless component can have Props but staleless can not have States.
                </p>
            </div>
            <div className='question-container'>
                <h1> Q :How useState works?</h1>
                <p>Ans :Usestate (written as useState) is a React hook thats helps us to control the state.The useState function is a built in hook that can be imported from the react package which allows us to add state to our functional components.The useState returns a tuple where the first parameter defines the current state and second parameter is the method that will allow us to update the state.If we change the second parameter in the tuple then the value of first parameter automatically changes and it stores current changes value.The main advantage of useState function is that using useState hook inside a function component we can create a piece of state without switching to class components.
                </p>
            </div>

        </div>
    );
};

export default Question;