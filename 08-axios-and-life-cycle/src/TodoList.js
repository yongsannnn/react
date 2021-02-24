import React from "react"
import axios from "axios"

class TodoList extends React.Component {
    state = {
        tasks:[]
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.loadData}>Load Data</button>
                {this.renderList()}
            </React.Fragment>
        )
    }

    loadData = async () => {
        // in React using axios.get will start looking for file in the public folder. 
        let response = await axios.get("items.json");
        console.log(response.data)
        this.setState({
            "tasks": response.data.tasks
        })
    }

    //Function + Accumulator Strategy
    renderList = () => {
        let list = [];
        for (let task of this.state.tasks) {
            let todoElement = <div key={task.id}>
                <h2>{task.title}</h2>
            </div>
        list.push(todoElement)
        }
        return list
    }
}

export default TodoList