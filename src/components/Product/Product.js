import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';


const Product = (props) => {
    const {img,name, seller, price, stock}=props.products;

    return (
        <div className= "product">

            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className="product-heading">{name}</h3>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} Left in stock - Order soon</small></p>
                <button 
                className="main-btn"
                onClick={()=>props.handleAddProduct(props.products)}
                >
                    <FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>   
        </div>
    );
};

export default Product;