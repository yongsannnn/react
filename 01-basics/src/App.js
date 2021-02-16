import logo from './logo.svg';
import './App.css';
import React from "react"; //In order to use React.Fragment
import cafeInterior from "./cafe-interior.jpg"; //Importing image and assigning it to a variable

function App() {
    return (
        <div className="App">
            <div>
                <h1>To Do list</h1>
            </div>
            <div>
                <ol>
                    <li>Wash Clothes</li>
                    <li>Mop Floor</li>
                </ol>
            </div>
            <div>
                <p style={{
                    fontFamily: "Verdana",
                    fontSize: "24px",
                    color: "red",
                    marginTop:"100px"
                }}>Welcome</p>
                <img src={require("./pin.png").default}></img>
                <img src={cafeInterior} />
            </div>

        </div>
    );
}

export default App;
