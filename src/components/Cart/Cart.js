import React from 'react';
import Card from './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd)=>total+prd.price,0);
    let ShippingCost = 0;
    if(total>15){
        ShippingCost = 4.99;
    }else if(total>15){
        ShippingCost = 12.99;
    }
    const tax = (total/10).toFixed(2);
    const grandTotal = (total+ShippingCost+Number(tax)).toFixed(2);

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    };

    return (
        <div className="card-container">
            <h3 style={{fontSize:'20px', color:'#333'}}>Order Summary</h3>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {ShippingCost}</small></p>
            <p><small>Tax + VAT : {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;