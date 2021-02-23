import React from "react"

class Todo extends React.Component {
    state = {
        task: ["Wash Clothes", "Buy Groceries", "Mop Floor"]
    }

    renderTask() {
        let t = [];
        for (let eachTask of this.state.task) {
            t.push(<li>{eachTask}</li>)
        }
        return t
    }


    render() {
        let t = [];
        for (let eachTask of this.state.task) {
            t.push(<li>{eachTask}</li>)
        }
        return (
            <React.Fragment>
                <h1>Technique One: Use for loop</h1>
                <ul>
                    {t}
                </ul>
                <h1>Technique Two: Use Function</h1>
                <ul>
                    {this.renderTask()}
                </ul>
                <h1>Technique Three: Mapping</h1>
                <ul>
                    {/* {this.state.task.map(function(todo))} */}
                </ul>
            </React.Fragment>
        )
    }
}

export default Todo