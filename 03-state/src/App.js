import React from "react"
import './App.css';
import NumberBox from "./NumberBox"
import Timer from "./Timer"

function App() {
    return(
        <React.Fragment>
            <Timer/>
            <NumberBox color="green"/>
        </React.Fragment>
    )
}

export default App;
