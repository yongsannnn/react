import React from "react"
import ProductContext from "./ProductContext"

export default class ProductProvider extends React.Component {
    state = {
        products: [
            { id: 1, product_name: "Anvils", cost: 9.99 },
            { id: 2, product_name: "Hammer", cost: 12.20 },
            { id: 3, product_name: "Screwdriver", cost: 15.50 },
        ]
    }


    render() {
        const context = {
            products: () => {
                return this.state.products
            },
            addProduct: (newProductName, cost) => {
                // Before updating array, call axios to add the new product using the api
                let id = Math.floor(Math.random() * 10000 + 9999)

                // clone the original array
                const clone = [...this.state.products, {
                    "id": id,
                    "product_name": newProductName,
                    "cost": cost
                }]
                this.setState({
                    "products": clone
                })
            },
            findProduct: (productId) => {
                return this.state.products.find(p=> p.id == productId)
            }
        }
        return (
            <ProductContext.Provider value={context}>
                {this.props.children}
            </ProductContext.Provider>

        )
    }
}