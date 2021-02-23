import React from "react"

class ContactUs extends React.Component {
    state = {
        fname: "", //text
        lname: "", //text
        enquiries: "", //radio
        country: "", //dropdown
        contactMe: [], //checkbox
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Enter First Name: </label>
                    <input type="text" name="fname" value={this.state.fname} onChange={this.updateInfo}></input>
                </div>
                <div>
                    <label>Enter Last Name: </label>
                    <input type="text" name="lname" value={this.state.lname} onChange={this.updateInfo}></input>
                </div>
                <div>
                    <label>Enquiries:</label>
                    <div>
                        <input type="radio" name="enquiries" value="support" onChange={this.updateInfo} checked={this.state.enquiries === "support"} /><label>Support</label>
                        <input type="radio" name="enquiries" value="sales" onChange={this.updateInfo} checked={this.state.enquiries === "sales"} /><label>Sales</label>
                        <input type="radio" name="enquiries" value="marketing" onChange={this.updateInfo} checked={this.state.enquiries === "marketing"} /><label>Marketing</label>
                    </div>
                </div>
                <div>
                    <label>Country:</label>
                    <div>
                        <select name="country" value={this.state.country} onChange={this.updateInfo}>
                            <option>Select a country</option>
                            <option>Singapore</option>
                            <option>Malaysia</option>
                            <option>Thailand</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label>How would you like to be contacted</label>
                    <div>
                        <input type="checkbox" value="email" name="contactMe" onChange={this.updateContact} checked={this.state.contactMe.includes("email")} /><label>Email</label>
                        <input type="checkbox" value="phone-number" name="contactMe" onChange={this.updateContact} checked={this.state.contactMe.includes("phone-number")} /><label>Phone Number</label>
                        <input type="checkbox" value="slow-mail" name="contactMe" onChange={this.updateContact} checked={this.state.contactMe.includes("slow-mail")} /><label>Slow Mail</label>
                    </div>
                </div>
                <button disabled={!this.state.fname || !this.state.lname || !this.state.country || !this.state.enquiries || !(this.state.contactMe.length > 0)} onClick={this.submitInfo}>Submit</button>
                {/* <button disabled={!this.alternateValidateOk()} onClick={this.submitInfo}>Submit</button> */}
            </React.Fragment>
        )
    }

    updateInfo = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateContact = (event) => {
        if (this.state.contactMe.includes(event.target.value) === false) {
            this.setState({
                [event.target.name]: [...this.state.contactMe, event.target.value]
            })
        } else {
            this.setState({
                [event.target.name]: [...this.state.contactMe].filter(selection => selection !== event.target.value)
            })
        }
    }

    alternateUpdateContact = (event) => {
        //If this is true means it isn't selected before
        if (this.state.contactMe.includes(event.target.value) === false){
            //Clone
            let clone = [...this.state.contactMe]
            //Push
            clone.push(event.target.value)
            //Update
            this.setState({
                contactMe : clone
            })
        } else {
            // If the value is already in array, we are unchecking the array
            //Clone
            let clone = this.state.contactMe.slice()
            //Push
            let index = clone.indexOf(event.target.value)
            clone.splice(index,1)
            //Update
            this.setState({
                contactMe : clone
            })
        }
    }

    alternateValidateOk=()=>{
        return (
            this.state.fname.length > 0 &&
            this.state.lname.length > 0 &&
            this.state.enquiries.length > 0 &&
            this.state.country.length > 0 &&
            this.state.contactMe.length > 0
        )
    }
    submitInfo = () => {
        alert(`First Name: ${this.state.fname}
        Last Name: ${this.state.lname}
        Enquiries: ${this.state.enquiries}
        Country: ${this.state.country}
        Contact Me By: ${this.state.contactMe}`)
    }

}

export default ContactUs

// Create a contact us form that allows the user to enter:
// Their first name and last name
// What kind of enquiries they are making (support, sales or marketing)
// Which country they are from (Singapore, Malaysia or Thailand)

// Once the user has entered their info, and click the submit button, show what they have entered in an alert box.

// Allow the user to specify how they would like to be contacted. Allow a choice of email, phone number or slow mail. Present those options as checkboxes, and the user may check more than one of them.  