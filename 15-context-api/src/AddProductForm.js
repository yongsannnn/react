import React from "react"
import ProductContext from "./ProductContext"

export default class AddProductForm extends React.Component {
    static contextType = ProductContext

    state = {
        "product_name": "",
        "cost": 0
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div>
                        <label className="form-label">Name:</label>
                        <input className="form-control" type="text" name="product_name" value={this.state.product_name} onChange={this.updateFormField}></input>
                    </div>
                    <div>
                        <label className="form-label">Cost:</label>
                        <input className="form-control" type="text" name="cost" value={this.state.cost} onChange={this.updateFormField}></input>
                    </div>
                    <button onClick={() => {
                        this.context.addProduct(this.state.product_name, this.state.cost)
                    }}>Submit</button>
                </div>
            </React.Fragment>
        )
    }
}