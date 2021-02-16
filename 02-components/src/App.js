// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Header from "./Header"

function Alert(props) {
    return (
        <div style={{
            backgroundColor: props.bgColor,
        }}>{props.message}</div>
    )
}

function BorderedImageFrame(props) {
    return (
        <img src={props.imgLink} style={{
            border: "4px solid red"
        }} />
    )
}

function SumOfTwo (props){
    return(
    <div>{props.n1 + props.n2}</div>
    )
}


function App() {
    return (
        <div className="App">
            <Header />
            <Alert message="What the?!" bgColor="pink" />
            <BorderedImageFrame imgLink= {require("./res.jpg").default}/>
            <SumOfTwo n1={3} n2={4}/>
        </div>
    );
}

export default App;
