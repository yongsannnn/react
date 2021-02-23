// Design a restaurant booking form.

// Capture first name and last name
// (Radio buttons) Seating: outdoors, indoors or VIP indoors
// (Select dropdown) Smoking: smoking or non-smoking
// (Checkboxes) Select an appetizer: Raw fishes, salad, fried cuttlefish or peanuts


import React from "react"

class Booking extends React.Component {
    state = {
        fname: "",
        lname: "",
        seating: "",
        smoking: "",
        appetizer: [],
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <label>First Name :</label>
                    <input type="text" name="fname" value={this.state.fname} onChange={this.updateInfo}></input>
                </div>
                <div>
                    <label>Last Name :</label>
                    <input type="text" name="lname" value={this.state.lname} onChange={this.updateInfo}></input>
                </div>
                <div>
                    <label>Seatings :</label>
                    <input type="radio" name="seating" value="outdoors" onChange={this.updateInfo} checked={this.state.seating === "outdoors"} /><label>Outdoors</label>
                    <input type="radio" name="seating" value="indoors" onChange={this.updateInfo} checked={this.state.seating === "indoors"} /><label>Indoors</label>
                    <input type="radio" name="seating" value="vip" onChange={this.updateInfo} checked={this.state.seating === "vip"} /><label>VIP Indoors</label>
                </div>
                <div>
                    <label>Smoking :</label>
                    <div>
                        <select name="smoking" value={this.state.smoking} onChange={this.updateInfo}>
                            <option>Please Select One</option>
                            <option value="smoking">Smoking</option>
                            <option value="non-smoking">Non-Smoking</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label>Select an appetizer :</label>
                    <div>
                        <input type="checkbox" value="raw-fishes" name="appetizer" onChange={this.updateAppetizer} checked={this.state.appetizer.includes("raw-fishes")} /><label>Raw Fishes</label>
                        <input type="checkbox" value="salad" name="appetizer" onChange={this.updateAppetizer} checked={this.state.appetizer.includes("salad")} /><label>Salad</label>
                        <input type="checkbox" value="fried-cuttlefish" name="appetizer" onChange={this.updateAppetizer} checked={this.state.appetizer.includes("fried-cuttlefish")} /><label>Fried Cuttlefish</label>
                        <input type="checkbox" value="peanuts" name="appetizer" onChange={this.updateAppetizer} checked={this.state.appetizer.includes("peanuts")} /><label>Peanuts</label>
                    </div>
                </div>

                <button>Submit</button>
            </React.Fragment>
        )
    }
    updateInfo = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    updateAppetizer=(event)=>{
        if (this.state.appetizer.includes(event.target.value) === false){
            this.setState({
                [event.target.name]: [...this.state.appetizer, event.target.value]
            })
        } else {
            this.setState({
                [event.target.name]:[...this.state.appetizer].filter(selection => selection !==event.target.value)
            })
        }
    }
}

export default Booking