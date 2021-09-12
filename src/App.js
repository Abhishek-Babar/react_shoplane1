import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Navbar from './components/topbar';
import Carasol from './components/carasol';
import Main from './components/products';
import Footer from './components/footer';
import Product from './components/product-details';
import { Component, useState } from 'react';
import axios from "axios";
import Checkout from './components/checkout';
import Order from './components/order-success';
class App extends Component {
   constructor(props){
     super(props);
     this.state = {
       search: "",
       data: [],
       loadData: []
     }
   }
   componentDidMount() {
    axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
          .then(res => this.setState({data: res.data, loadData: res.data}));
   }
  update = (val) => { 
    this.setState({search:val},() => {
      const response =  this.state.loadData.filter(item => item.name.toLowerCase().includes(this.state.search) || item.brand.toLowerCase().includes(this.state.search));
      this.setState({data: response})
    })
  }
  
  render() {
  return (
    <Router>
      <Navbar sendSearch={this.update} cart={this.state.cartCount}/>
      <Switch>
        <Route exact path={"/react_shoplane"} component={() => (
          <div>
            <Carasol />
            <Main data={this.state.data} search={this.state.search}/>
          </div>
        )} ></Route>
        <Route exact path="/">
          < Redirect to={"/react_shoplane"}></Redirect>
        </Route>
        <Route path={"/details"} component={Product}></Route>
        <Route path={"/checkout"} component={Checkout} ></Route>
        <Route  path={"/success"} component={Order} ></Route>
      </Switch>
      <Footer />
    </Router>

  );
        }
}

export default App;
