import React from "react";

// a CLASS-based component
// 1. a class is a container that can contain variables and functions
// 2. a class can be cloned. It's like a prototype/boiler plate. The clone is known as instances. 
//    a class is like a definition of an entity
//    an instance of a class is a specific example of that entity

//Calling a class NumberBox
//Everything in React.Component is copied into NumberBox.
//NumberBox is an extension of React.Component
//Advance Object Oriented Programming (OOP)
class NumberBox extends React.Component {
    state = {
        "count": 10
    }

    render() {
        return (
            <React.Fragment>
                <div style={{
                    "border": "1px solid black",
                    "color": this.props.color || "black",
                    "padding": "10px",
                    "width": "25px",
                }}>
                    {/* the "this" refers to the NumberBox  */}
                    <span style={{
                        "fontSize": this.state.count * 2 + 10
                    }}>{this.state.count}</span>

                </div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </React.Fragment>

        )
    }

    //The function MUST to be an arrow function
    increment = () =>{
        // we HAVE to use setState to change a key inside the state
        // setState is ASYNC
        this.setState({
            "count": this.state.count + 1
        })
    }
    decrement = () =>{
        this.setState({
            "count": this.state.count - 1
        })
    }
}

export default NumberBox;