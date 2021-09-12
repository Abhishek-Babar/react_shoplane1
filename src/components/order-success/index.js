import React from "react";
import "./style.css";
import img from "../../utils/img_confirm.png"
const Order = () => {
    return (
        <article id="confirm">
            <img src={img} alt="order-confirm-image" srcset="" />
            <h2>Order Placed Successfully!!</h2>
            <p>We have sent you an email with the order details</p>
        </article>
    )
}
export default Order;