import React from "react"


// Questions in the form
// Email -> text input
// Rate how happy -> Radio
// Which country are you from -> Dropdown
// Select how they know about the event -> Checkboxes


class SurveyForm extends React.Component {
    state = {
        email: "",
        rating: 0,
        country: "",
        knowAbout: [] //Multiple values can be selected from checkboxes. Default should be an array
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <div>
                        <label className="form-label">Email</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.updateEmail}
                        />
                    </div>
                    <div>
                        <label className="form-label">Rating</label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                value={1}
                                onChange={this.updateRating}
                                name="rating"
                                checked={parseInt(this.state.rating) === 1}
                            />
                            <label className="form-check-label" for="defaultCheck1">
                                Unhappy
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                value={2}
                                onChange={this.updateRating}
                                name="rating"
                                checked={parseInt(this.state.rating) === 2}
                            />
                            <label className="form-check-label">Average</label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                value={3}
                                onChange={this.updateRating}
                                name="rating"
                                checked={parseInt(this.state.rating) === 3}
                            />
                            <label className="form-check-label" for="defaultCheck1">
                                Happy
                            </label>
                        </div>
                    </div>
                    {/* end radio buttons */}
                    <div>
                        <label className="form-label">How you know about us</label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="advertisement"
                                onChange={this.updateKnowAbout}
                                name="knowAbout"
                            />
                            <label className="form-check-label" for="defaultCheck1">
                                Advertisement
                                </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="social-media"
                                onChange={this.updateKnowAbout}
                                name="knowAbout"
                            />
                            <label className="form-check-label">Social Media</label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="word-of-mouth"
                                onChange={this.updateKnowAbout}
                                name="knowAbout"
                            />
                            <label className="form-check-label" for="defaultCheck1">
                                Word of mouth
                            </label>
                        </div>
                    </div>
                    {/* end checkboxes */}
                </div>
            </React.Fragment>
        )
    }
    updateEmail = event => {
        this.setState({
            email: event.target.value
        });
    };

    updateRating = event => {
        this.setState({
            rating: event.target.value
        });
    };
    updateKnowAbout = event =>{
        // Beginner way but not encourage
        // This does not respect immutability
        // let knowAbout = this.state.knowAbout
        // knowAbout.push(event.target.value);
        // this.setState({
        //     "knowAbout":knowAbout;
        // })

        // Search Terms: immutable way to mutate an array
        // How to add to an array in an immutable way
        // 1. Make clone of original array
        // 2. Add to the clone
        // 3. set the clone back to the state

        // Method one
        // 1. Make clone of original array
        // let clone = this.state.knowAbout.slice();
        // 2. Add to the clone
        // clone.push(event.target.value);
        // 3. set the clone back to the state
        // this.setState({
        //     "knowAbout" : clone
        // })

        // Method Two
        // clone using spread operator
        // let clone =[...this.state.knowAbout]
        // 2. Add to the clone
        // clone.push(event.target.value);
        // 3. set the clone back to the state
        // this.setState({
        //     "knowAbout" : clone
        // })

        if (this.state.knowAbout.includes(event.target.value) === false){
            // Method Three
            // Do all steps together
            this.setState({
                "knowAbout": [...this.state.knowAbout, event.target.value]
            })
        } else {
            // the checkbox is already checked, so should remove from string when unchecked
            
            // 1. Clone the Array
            // let clone = this.state.knowAbout.slice();
            // 2. Remove the item from the clonsed array
            // let filtered = clone.filter(function(item){
            //     return item !== event.target.value
            // })
            // 3. We setState back
            // this.setState({
            //     "knowAbout" : filtered
            // })

            this.setState({
                "knowAbout" :[...this.state.knowAbout].filter(item=>item!==event.target.value)
            })
        }
    }
}
export default SurveyForm