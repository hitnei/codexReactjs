import React, { Component } from 'react'
import Nav from './components/Nav'
import Head from './components/Head'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Setup from './components/Setup'
import Order from './components/Order'
import Sidebar from './components/Sidebar'
import Cart from './components/Cart'
import TotalCart from './components/TotalCart'
// import Cart from './components/Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Modal from './components/Modal'
// require("../node_modules/bootstrap-less/js/bootstrap.js")
// import "../node_modules/bootstrap-less/js/bootstrap.js";

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryCurrent: 0,
      categories: [
        {
          id: 1,
          category: "Shirts",
        },
        {
          id: 2,
          category: "Dresses",
        },
        {
          id: 3,
          category: "Shorts",
        },
        {
          id: 4,
          category: "Jackets",
        },
      ],
      list: [
        {
          id: 1,
          status: 30,
          name: "Floral Jackquard Pullover",
          price: 120.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-1.jpg",
          category: 1,
          isCart: false,
          quatity: 0
        },
        {
          id: 2,
          status: 50,
          name: "Floral Pullover",
          price: 150.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-2.webp",
          category: 1,
          isCart: false,
          quatity: 0
        },
        {
          id: 3,
          status: 10,
          name: "Floral Jackquard Pullover",
          price: 130.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-3.webp",
          category: 2,
          isCart: false,
          quatity: 0
        },
        {
          id: 4,
          status: 30,
          name: "Floral Jackquard Pullover",
          price: 120.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-4.webp",
          category: 3,
          isCart: false,
          quatity: 0
        },
        {
          id: 5,
          status: 30,
          name: "Floral Jackquard Pullover",
          price: 120.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-5.webp",
          category: 4,
          isCart: false,
          quatity: 0
        },
        {
          id: 6,
          status: 30,
          name: "Floral Jackquard Pullover",
          price: 120.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-1.jpg",
          category: 1,
          isCart: false,
          quatity: 0
        },
        {
          id: 7,
          status: 50,
          name: "Floral Pullover",
          price: 150.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-2.webp",
          category: 1,
          isCart: false,
          quatity: 0
        },
        {
          id: 8,
          status: 10,
          name: "Floral Jackquard Pullover",
          price: 130.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-3.webp",
          category: 2,
          isCart: false,
          quatity: 0
        },
        {
          id: 9,
          status: 30,
          name: "Floral Jackquard Pullover",
          price: 120.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-4.webp",
          category: 3,
          isCart: false,
          quatity: 0
        },
        {
          id: 10,
          status: 30,
          name: "Floral Jackquard Pullover",
          price: 120.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-5.webp",
          category: 4,
          isCart: false,
          quatity: 0
        },
      ],
      cart: [],
      showCart: 0,
      cartControl: 0,
      itemDetail: "null"
    }
  }
  findById(list, id) {
    var rs = -1
    list.forEach((item, index) => {
      if (item.id === id) {
        rs = index
      }
    });
    return rs;
  }
  findByIdReturnObj(list, id) {
    var rs = null
    list.forEach((item, index) => {
      if (item.id === id) {
        rs = item
      }
    });
    return rs;
  }
  onReceiveType = (id) => {
    this.setState({
      categoryCurrent: id
    })
  }
  onReset = () => {
    this.setState({
      categoryCurrent: 0
    })
  }
  onAddCart(id, qua) {
    // console.log(id)
    // console.log(qua==undefined)
    var index = this.findById(this.state.list, id)
    var list = this.state.list
    if (index !== -1) {
      list[index].isCart = true
      list[index].quatity = qua==undefined? ++list[index].quatity : (list[index].quatity + qua)
      // console.log(list[index].quatity);
      var showCart = list[index].quatity === 1 ? ++this.state.showCart : this.state.showCart
      this.setState({
        list,
        showCart
      })
    }
    // console.log(this.state.showCart)
  }
  onChangeCart(qua, id) {
    // console.log(qua)
    // console.log(id)
    var list = this.state.list
    var index = this.findById(list, id)
    // console.log(index)
    list[index].quatity = qua
    this.setState({
      list
    })
  }
  removeCart(id) {
    var list = this.state.list
    var index = this.findById(list, id)
    list[index].isCart = false
    list[index].quatity = 0
    var showCart = --this.state.showCart
    this.setState({
      list,
      showCart
    })
    // console.log(this.state.showCart)
  }
  changeDetai(id){
    var detail = this.findByIdReturnObj(this.state.list, id)
    var ind = this.findById(this.state.categories, detail.category)
    detail.categ = this.state.categories[ind].category
    // console.log(ind)
    this.setState({
      itemDetail: detail
    })
  }
  render() {

    return (
      <Router>
        {/* <div> */}
        <Setup />
        <Nav list={this.state.list} />
        <Switch>
          <Route exact path="/">
            <Head />
            <section className="ftco-section bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-lg-10 order-md-last">
                    <Order setItem={this.state.list} categoryCurrent={this.state.categoryCurrent} onReset={this.onReset} onAddCart={(id) => this.onAddCart(id)} changeDetail={(id) => this.changeDetai(id)}/>
                  </div>
                  <div className="col-md-4 col-lg-2 sidebar">
                    <Sidebar categories={this.state.categories} onReceiveType={this.onReceiveType} />
                  </div>
                </div>
              </div>
            </section>
          </Route>

          <Route path="/cart">
            <div className="container">
              {this.state.showCart !== 0 ? <Cart list={this.state.list} cart={this.state.cart} onChangeCart={(qua, id) => this.onChangeCart(qua, id)} removeCart={(id) => this.removeCart(id)} /> : ""}
              {this.state.showCart !== 0 ? <TotalCart list={this.state.list} /> : ""}
            </div>
          </Route>
        </Switch>
        <Footer />
        <Loader />
        {/* </div> */}
        <Modal itemDetail={this.state.itemDetail} onChangeCart={(id, qua) => this.onAddCart(id, qua)}/>
      </Router>
    )
  }
}
