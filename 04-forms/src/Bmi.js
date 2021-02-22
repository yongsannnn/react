import React from "react"

class Bmi extends React.Component {
    state = {
        weight: 0,
        height: 0,
        healthy: "You are healthy",
        obese: "You are obese",
        underweight: "You are underweight"
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Enter weight(kg):</label>
                    <input type="text" name="weight" value={this.state.weight} onChange={this.updateBMI} />
                </div>
                <div>
                    <label>Enter height(m):</label>
                    <input type="text" name="height" value={this.state.height} onChange={this.updateBMI} />
                </div>
                <div style={{
                    display: this.getVisibility(),
                    color: this.getWeightColor()
                }}>
                    Your BMI is = {this.calculateBMI()}.
                </div>

                <p style={{
                    display: this.getVisibility(),
                }}>{this.showStatement()}</p>
            </React.Fragment>
        )
    }
    calculateBMI() {
        return this.state.weight / (this.state.height ** 2)
    }

    showStatement() {
        let bmi= this.calculateBMI()
        if (bmi > 25) {
            return this.state.obese
        } else if (bmi < 18.5) {
            return this.state.underweight
        } else {
            return this.state.healthy
        }
    }
    updateBMI = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    getWeightColor = ()=>{
        let bmi= this.calculateBMI()
        if (bmi > 25) {
            return "red"
        } else if (bmi < 18.5) {
            return "blue"
        } else {
            return "green"
        }
    }

    getVisibility = () =>{
        if (this.state.height > 0 && this.state.weight > 0){
            return "block";
        } else {
            return "none";
        }

    }
}

export default Bmi