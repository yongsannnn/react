import React from "react"
import Display from "./Display"
import Control from "./Control"
import Amount from "./Amount"

export default class ATM extends React.Component {
    state = {
        balance: 1000,
        amount: 0
    }
    render() {
        return (
            <React.Fragment>
                <Display balance={this.state.balance}/>
                <Amount onDisplay={this.updateForm} amount={this.state.amount}/>
                <Control onWithdraw={this.withdrawAmount} onDeposit={this.depositAmount}/>
            </React.Fragment>
        )
    }
    updateForm = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    depositAmount = (event) => {
        this.setState({
            balance: parseFloat(this.state.balance) + parseFloat(this.state.amount),
            amount: 0
        })
    }

    withdrawAmount = (event) => {
        this.setState({
            balance: parseFloat(this.state.balance) - parseFloat(this.state.amount),
            amount: 0
        })
    }
}