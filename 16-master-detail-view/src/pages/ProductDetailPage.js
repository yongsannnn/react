import React from "react"
import ProductContext from "../ProductContext"

export default class ProductDetailPage extends React.Component {
    state = {
        productId: 0
    }
    static contextType = ProductContext
    async componentDidMount () {
        let id = this.props.match.params.product_id
        this.setState({
            "productId": id
        })
    }


    render() {
        let product = this.context.findProduct(this.state.productId)
        return (
            <React.Fragment>
                <h1>Details for Product ID#{this.state.productId}</h1>
                {
                product ? <ul>
                    <li>
                        Product Name:{product.product_name}
                    </li>
                    <li>
                        Cost:{product.cost}
                    </li>
                </ul> : null
                }
            </React.Fragment>
        )
    }
}