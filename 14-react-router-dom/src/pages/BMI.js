import React, { useState } from "react"


export default function BMI(){
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [bmi, setBmi] = useState(0) 

    const submit = () => {
        let num = weight / (height * height)
        setBmi(num)
    }
    return(
        <React.Fragment>
            <div>
                <label>Enter Height:</label>
                <input type="text" name="height" value={height} onChange={(e)=>setHeight(e.target.value)}></input>
            </div>
            <div>
                <label>Enter Weight:</label>
                <input type="text" name="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
            </div>
            <button onClick={submit}>Check BMI</button>
            <div>
                Your BMI: {bmi}
            </div>
        </React.Fragment>
    )


}