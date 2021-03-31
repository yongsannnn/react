import React from "react"
import ProductListing from "../ProductListing"
import AddProductForm from "../AddProductForm"

export default function ProductListingPage(){
    return (
        <React.Fragment>
            <ProductListing/>
            <AddProductForm/>
        </React.Fragment>
    )
}