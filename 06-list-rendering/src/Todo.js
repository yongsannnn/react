import React from "react"

class Todo extends React.Component {
    state = {
        task: ["Wash Clothes", "Buy Groceries", "Mop Floor"]
    }

    renderTask() {
        let t = [];
        for (let eachTask of this.state.task) {
            t.push(<li style={{ color: "blue" }}>{eachTask}</li>)
        }
        return t
    }

    renderTask2() {
        return this.state.task.map(function (todo) {
            return <li style={{ color: "pink" }}>{todo}</li>
        })
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
                    {this.state.task.map(function (todo) {
                        return <li style={{ color: "red" }}>{todo}</li>
                    })}
                </ul>
                <h1>Technique Four: Use map inside a function</h1>
                <ul>
                    {this.renderTask2()}
                </ul>
            </React.Fragment>
        )
    }
}

export default Todo