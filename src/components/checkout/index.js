import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.css"
const Checkout = () => {
    const allItems = JSON.parse(localStorage.getItem("products")) === null ? [] : JSON.parse(localStorage.getItem("products"));
    let totalAmount = 0;
    if(allItems.length > 0) {
        for(let item of allItems) {
            totalAmount += (item.count * item.price);
        }
    }
    const [success, setSuccess] = useState(false)
    const placeOrder = () => {
        document.getElementById("loader").style.display = "flex";
        setTimeout(() => {
            localStorage.clear();
            document.getElementById("cart-count").style.display ="none";
            setSuccess(true);
        },3000)
        
    }
    return(
        <main>
        <h1>Checkout</h1>
        <h2>Total Items: <span id="total-items"></span></h2>
        <div id="main-content">
            <section id="card-list">
             {allItems.length > 0 ? allItems.map((item) => (
                    <article className="cart-card">
                        <div className="img-wrapper">
                            <img src={item.img} className="card-img"/>
                        </div>
                        <div>
                            <h3>{item.name}</h3>
                            <p>x {item.count}</p>
                            <p>Amount: Rs {item.price * item.count}</p>
                        </div>
                    </article>
             )) : <h3>No items added in the cart</h3>}
            </section>
            <section id="amount-section">
                <h2>Total Amount</h2>
                <p>Amount: Rs <span id="total-amount">{totalAmount}</span></p>
                 <button onClick={allItems.length > 0 ? placeOrder : () => alert("No items added in the cart")} id="place-order">Place Order</button>
                 {success && <Redirect to="/success" />}
            </section>
        </div>
        <aside id="loader">
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </aside>
    </main>
    )
}
export default Checkout;