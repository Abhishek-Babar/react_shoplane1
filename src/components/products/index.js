import React, { PureComponent } from "react";
import "./style.css";
import {Link, link} from "react-router-dom";
import { connect } from "react-redux";
import {loadProducts} from "../../redux/actions";
import axios from "axios";
class Main extends PureComponent {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
              .then(({data}) => this.props.loadProducts(data),console.log(this.props.products));
       }
    render() {
        return (
            <div>
                <h2 className="h2">Clothing for Men and Women</h2>
                <section id="clothing">
                    {this.props.products.length && this.props.products.map(item => {
                        if(item.isAccessory !== true) {
                            return(
                                <Link to={{pathname:`/details`,
                                 id:item.id}}>
                         <div className="card">
                            <img src={item.preview} alt="product image"/>
                            <div className="details">
                               <h4 className="product">{item.name}</h4>
                               <h5 className="brand">{item.brand}</h5>
                               <span className="price">Rs {item.price}</span>
                            </div>
                        </div>
                        </Link>
                        )
                        }
                    }
                    )}
                </section>
                <h2 className="h2">Accessories for Men and Women</h2>
                <section id="accessories">
                {this.props.products.length && this.props.products.map(item => {
                        if(item.isAccessory === true) {
                            return(
                                <Link to={{pathname:`/details`, id:item.id}}>
                         <div className="card">
                            <img src={item.preview} alt="product image"/>
                            <div className="details">
                               <h4 className="product">{item.name}</h4>
                               <h5 className="brand">{item.brand}</h5>
                               <span className="price">Rs {item.price}</span>
                            </div>
                        </div>
                        </Link>)
                        }
                    }
                    )}
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
     products: state.products
})
const mapDispatchToProps = (dispatch) => ({
    loadProducts: (payload) => dispatch(loadProducts(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Main);