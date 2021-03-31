import React, { useContext } from "react"
import StudentContext from "./StudentContext"
import AddStudent from "./AddStudent"


export default function StudentList() {
    let context = useContext(StudentContext)
    return (
        <React.Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Year</th>
                        <th>Gender</th>
                        <th>Graduated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        context.getStudent().map(s => {
                            return (<React.Fragment>
                                <tr>
                                    <td>{s.id}</td>
                                    <td>{s.year}</td>
                                    <td>{s.gender}</td>
                                    <td>{s.graduated}</td>
                                    <td><button className="btn btn-danger" value={s.id} onClick={()=>{
                                       context.deleteStudent(s.id)
                                    }}>Delete</button></td>
                                </tr>
                            </React.Fragment>)
                        })
                    }
                </tbody>
            </table>
                    <AddStudent/>
        </React.Fragment>
    )
}