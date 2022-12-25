import React from 'react'
import {productData, productDataTwo} from "../Products/data";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Feature from "../Feature/Feature";

function Main() {
    return (
        <div>
            <Hero/>
            <Products heading="Choose your favourite" data={productData}/>
            <Feature/>
            <Products heading="Sweet Treats for you" data={productDataTwo}/>
        </div>
    )
}

export default Main
