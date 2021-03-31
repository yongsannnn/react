import React from "react"
import { useLocation } from "react-router-dom";


export default function ThankYou(props) {
    const location = useLocation();
    const email = location.state.formData.email;
    const comments = location.state.formData.comments;

    return (
        <React.Fragment>
            <div className="alert alert-success">
                <div>
                    You are submitting:
            <ul>
                        <li>Email: {email}</li>
                        <li>Comments: {comments}</li>
                    </ul>
                </div>


                <div>
                    Thank you for your comments. 
        </div>
            </div>
        </React.Fragment>
    );
}