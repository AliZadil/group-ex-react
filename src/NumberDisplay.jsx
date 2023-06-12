import React, { useState, useEffect } from "react";
import "./App.css";


const API_URL = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new'

function NumberDisplay(){
    const [number, setNumber] = useState(0);

    useEffect (() => {
        fetch(API_URL).then(response => response.json()).then((result) => {
            setNumber(result)
        })
    }, [])

    const saveToStorage = () => {
        localStorage.setItem('Number', JSON.stringify(number));
    }

    const loadFromStorage = () => {
        setNumber(JSON.parse(localStorage.getItem('Number')));
    }

    return (
        <div>
            <p>{number}</p>
            <br />
            <button onClick={() => {
                setNumber(number +1)
            }}>Increment</button>
            <button onClick={() => saveToStorage()}>Save to storage</button>
            <button onClick={() => loadFromStorage()}>Load from storage</button>
        </div>
    )

}


export default NumberDisplay