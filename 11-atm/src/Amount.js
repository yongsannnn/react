import React from "react"

export default function Amount(props){
    return (
        <React.Fragment>
            <input type="text" name="amount" value={props.amount} onChange={props.onDisplay} />
        </React.Fragment>

    )
}