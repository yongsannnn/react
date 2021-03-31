import React, { useState } from "react"
import { useHistory } from 'react-router-dom'

export default function Contact() {
    // Replicate state using React Hooks
    // First argument is the default value of the state variable

    // First way
    // Issue with this secnario is all display as "State".
    // You will not know which one is for which
    // const [email, setEmail] = useState("")
    // const [comments, setComments] = useState("")

    // Second way (Paul's personal method)
    const [formData, setFormData] = useState({
        "email": "",
        "comments": ""
    })

    // create a history function by using useHistory
    const history = useHistory();

    const submitForm = () => {
        history.push('/thank-you', {
            'formData': formData
        })
    }

    const updateFormField = (e) => {
        // 1. clone the original object
        let clone = { ...formData }

        // 2. make changes to the clone
        clone[e.target.name] = e.target.value;

        // 3. save back to state
        setFormData(clone);
    }

    return (
        <React.Fragment>
            <h1>Contact</h1>
            <div>
                <label className="form-label">
                    Email
                </label>
                <input type="text" name="email" value={formData.email} onChange={updateFormField} className="form-control" />
            </div>
            <div>
                <label className="form-label">
                    Comments
                </label>
                <textarea type="text" name="comments" value={formData.comments} onChange={updateFormField} className="form-control" />
            </div>
            <button className="btn btn-primary mt-2" onClick={submitForm} >Submit</button>

        </React.Fragment>
    )
}