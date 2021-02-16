// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Header from "./Header"
import BorderedImageFrame from "./BorderedImage"
import SumOfTwo from "./SumOfTwo"

function Alert(props) {
    return (
        <div style={{
            backgroundColor: props.bgColor,
        }}>{props.message}</div>
    )
}


function App() {
    return (
        <div className="App">
            <Header />
            <Alert message="What the?!" bgColor="pink" />
            <BorderedImageFrame imgLink= {require("./res.jpg").default}/>
            <SumOfTwo n1={8} n2={4}/>
        </div>
    );
}

export default App;
