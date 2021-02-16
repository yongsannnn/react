import React from "react";



class Timer extends React.Component {
    state = {
        "count": 10
    }
    timer = null 
    render() {
        return (
            <React.Fragment>
                <h1>{this.state.count} seconds left...</h1>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
            </React.Fragment>
        ) // end of return
    } // end of render

    //Setting up start function
    start = () => {
        let startTimer = () => {
            this.setState({
                "count": this.state.count - 1
            })
        }
        this.timer = setInterval(startTimer, 1000);
    }

    //Setting up stop function
    stop = () => {
        clearInterval(this.timer);
    }

    //Setting up reset function
    reset = () => {
        this.setState({
            "count": "10"
        })
    }


} //end of Timer class


export default Timer;