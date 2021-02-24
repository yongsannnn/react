import React from "react"

export default function Control(props) {
    return (
        <React.Fragment>
            <button onClick={props.onDeposit}>Deposit</button>
            <button onClick={props.onWithdraw}>Withdraw</button>
        </React.Fragment>

    )
}