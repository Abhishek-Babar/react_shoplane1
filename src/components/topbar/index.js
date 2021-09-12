import React, { useEffect, useState } from "react";
import "./style.css";
import {Link} from "react-router-dom"
import { Component } from "react";
import {connect} from "react-redux";
class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ""
        }
    }
    
    
    render() {
    return (
        <header>
            <span id="nav-brand"><b>SHOP</b>LANE</span>
            <nav>
                <Link to="/">CLOTHING</Link>
                <Link to="/">ACCESSORIES</Link>
                <div id="search-wrapper">
                    <input onChange={e => this.setState({search: e.target.value},() => this.props.sendSearch(this.state.search))} id="search" type="text" value={this.state.search} placeholder="Search for Clothing and Accessories" />
                    <i className="fas fa-search"></i>
                </div>
                <Link to="/checkout">
                    <div id="cart">
                        <i className="fas fa-shopping-cart"></i>
                        {this.props.cartCount > 0 ? <div style={{display: "flex"}} id="cart-count">{this.props.cartCount}</div> :<div  id="cart-count">{this.props.cartCount}</div>}
                    </div>
                </Link>
                <i className="fa fa-user-circle"></i>
            </nav>
            <div id="toggle-button">
                <i className="fas fa-bars"></i>
            </div>
        </header>)
}
   
}
const mapStateToProps = (state) => ({
    cartCount: state.cartCount
})

export default connect(mapStateToProps, null)(Navbar);