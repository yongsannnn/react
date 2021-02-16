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


function App() {
    return (
        <div className="App">
            <Header />
            <Alert message="What the?!" bgColor="pink" />
            <BorderedImageFrame imgLink= {require("./res.jpg").default}/>
        </div>
    );
}

export default App;
