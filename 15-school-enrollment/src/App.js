import React from "react"
import StudentContext from "./StudentContext"
import StudentList from "./StudentList"
import "bootstrap/dist/css/bootstrap.min.css"


export default class App extends React.Component {
    state = {
        students: [
            { id: "A1", year: 1, gender: "male", graduated: "false" },
            { id: "B2", year: 2, gender: "female", graduated: "false" },
            { id: "C3", year: 2, gender: "female", graduated: "false" },
            { id: "D4", year: 3, gender: "male", graduated: "false" },
            { id: "E5", year: 4, gender: "female", graduated: "true" },
        ]
    }
    render() {
        const context = {
            getStudent: () => {
                return this.state.students
            },
            addStudent: (id, year, gender, graduated) => {
                this.setState({
                    "students": [...this.state.students, {
                        "id": id,
                        "year": year,
                        "gender": gender,
                        "graduated": graduated
                    }]
                })
            },
            deleteStudent: (id) => {
                // Find Index of the id that you want to delete
                let index = 0
                for (let i = 0; i < this.state.students.length; i++) {
                    if (this.state.students[i].id === id) {
                        index = i
                    }
                }
                // Clone state, slice the state, update state
                this.setState({
                    students: [...this.state.students.slice(0, index), ...this.state.students.slice(index + 1)]
                })
            }
        }
        return (
            <div className="container">
                <StudentContext.Provider value={context}>
                    <StudentList />
                </StudentContext.Provider>
            </div>
        )
    }
}

