import React from "react"
import StudentContext from "./StudentContext"

export default class AddStudent extends React.Component {
    static contextType = StudentContext
    state = {
        "id": "",
        "year": "",
        "gender": "",
        "graduated": ""
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label className="form-label">ID:</label>
                    <input className="form-control" type="text" name="id" value={this.state.id} onChange={this.updateFormField}></input>
                </div>
                <div>
                    <label className="form-label">Year:</label>
                    <input className="form-control" type="text" name="year" value={this.state.year} onChange={this.updateFormField}></input>
                </div>
                <div>
                    <label className="form-label">Gender:</label>
                    <input className="form-control" type="text" name="gender" value={this.state.gender} onChange={this.updateFormField}></input>
                </div>
                <div>
                    <label className="form-label">Graduated:</label>
                    <input className="form-control" type="text" name="graduated" value={this.state.graduated} onChange={this.updateFormField}></input>
                </div>
                <button className="btn btn-success mt-2" onClick={()=>{
                    this.context.addStudent(this.state.id,this.state.year,this.state.gender,this.state.graduated)
                }}>Add Student</button>
            </React.Fragment>
        )
    }
}