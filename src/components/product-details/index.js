import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { updateCart } from "../../redux/actions";
import "./style.css";
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: {},
            photos: [],
            id: this.props.location.id
        }
    }
    componentDidMount() {
        axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${this.state.id}`)
            .then(res => this.setState({ productData: res.data, photos: res.data.photos }))
    }
    
    selected = (event) => {
       const images = document.getElementsByClassName("img-thumbnail");
       for(let image of images) {
           image.classList.remove("selected")
       } 
       event.currentTarget.classList.add("selected");
       document.getElementsByClassName("preview-img")[0].src = event.currentTarget.src
    }
    cartUpdate = () => {
        const cart = JSON.parse(localStorage.getItem("products")) === null ? [] : JSON.parse(localStorage.getItem("products"));
        let cartCount = JSON.parse(localStorage.getItem("cart-count")) === null ? 0 : JSON.parse(localStorage.getItem("cart-count"));
        const addItem = {
            name: this.state.productData.name,
            brand: this.state.productData.brand,
            price: this.state.productData.price,
            img: this.state.productData.preview,
            count: 1
        }
        if(cart.length > 0) {
           const item = cart.find(item => item.name === addItem.name);
           if(item) {
               cart.forEach(element => {
                   if(element.name === item.name){
                       element.count += 1;
                   }
               });
              cartCount++;
           } else {
            cart.push(addItem);
            cartCount++;
           }
        } else {
        cart.push(addItem);
        cartCount++;
        }
        localStorage.setItem("products",JSON.stringify(cart))
        localStorage.setItem("cart-count", cartCount)
        this.props.increCart(1)
    }
    render() {
        return (
            <div id="main">
                <section id="preview">
                    <img src={this.state.productData.preview} className="preview-img"></img>
                </section>
                <section id="description">
                    <h1 id="heading">{this.state.productData.name}</h1>
                    <h3 id="brand">{this.state.productData.brand}</h3>
                    <h3>Price: Rs <span id="price">{this.state.productData.price}</span></h3>
                    <h3>Description</h3>
                    <p id="details">{this.state.productData.description}</p>
                    <h3>Product Preview</h3>
                    <div id="photos">
                        {this.state.photos.map((img, index) => (
                            index === 0 ? <img src={img} onClick={this.selected} className="img-thumbnail selected" /> : <img src={img} onClick={this.selected} className="img-thumbnail" />
                        ))}
                    </div>
                    <button onClick={this.cartUpdate} id="add-to-cart">
                        Add to Cart
                    </button>
                </section>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    increCart: (payload) => dispatch(updateCart(payload))
})
export default connect(null, mapDispatchToProps)(Product);