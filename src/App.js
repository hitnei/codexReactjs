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
  // Link
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
          quatity: 0,
          rate: 3,
        },
        {
          id: 2,
          status: 50,
          name: "Floral Pullover",
          price: 150.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-2.webp",
          category: 1,
          isCart: false,
          quatity: 0,
          rate: 2,
        },
        {
          id: 3,
          status: 10,
          name: "Floral Jackquard Pullover",
          price: 130.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-3.webp",
          category: 2,
          isCart: false,
          quatity: 0,
          rate: 5,
        },
        {
          id: 4,
          status: 30,
          name: "Floral Jackquard Pullover",
          price: 120.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-4.webp",
          category: 3,
          isCart: false,
          quatity: 0,
          rate: 0,
        },
        {
          id: 5,
          status: 30,
          name: "Floral Jackquard Pullover",
          price: 120.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-5.webp",
          category: 4,
          isCart: false,
          quatity: 0,
          rate: 2,
        },
        {
          id: 6,
          status: 30,
          name: "Floral Jackquard Pullover",
          price: 120.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-1.jpg",
          category: 1,
          isCart: false,
          quatity: 0,
          rate: 4,
        },
        {
          id: 7,
          status: 50,
          name: "Floral Pullover",
          price: 150.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-2.webp",
          category: 1,
          isCart: false,
          quatity: 0,
          rate: 0,
        },
        {
          id: 8,
          status: 10,
          name: "Floral Jackquard Pullover",
          price: 130.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-3.webp",
          category: 2,
          isCart: false,
          quatity: 0,
          rate: 0,
        },
        {
          id: 9,
          status: 30,
          name: "Floral Jackquard Pullover",
          price: 120.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-4.webp",
          category: 3,
          isCart: false,
          quatity: 0,
          rate: 3,
        },
        {
          id: 10,
          status: 30,
          name: "Floral Jackquard Pullover",
          price: 120.00,
          link: "./Winkel - Free Bootstrap 4 Template by Colorlib_files/product-5.webp",
          category: 4,
          isCart: false,
          quatity: 0,
          rate: 2,
        },
      ],
      cartControl: 0,
      itemDetail: "null",
      cart: JSON.parse(localStorage.getItem("cart")),
      itemPerPage: 4,
      page: 1,
      listPerPage: []
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
  onAddCart(item) {
    item.quatity = item.quatity === 0 ? 1 : item.quatity
    var { cart } = this.state
    var index = this.findById(cart, item.id)
    if (index === -1) {
      cart.push(item)
    } else {
      cart[index].quatity++
    }
    this.setState({ cart })
    localStorage.setItem("cart", JSON.stringify(cart))
  }
  removeCart(id) {
    var { cart } = this.state
    var index = this.findById(cart, id)
    cart.splice(index, 1)
    // console.log(cart);

    this.setState({ cart })
    localStorage.setItem("cart", JSON.stringify(cart))

  }
  changeDetail(id) {
    // var detail = this.findByIdReturnObj(this.state.list, id)
    // var ind = this.findById(this.state.categories, detail.category)
    // detail.categ = this.state.categories[ind].category
    var { cart, list } = this.state
    var indCart = this.findById(cart, id)
    var indList = this.findById(list, id)
    console.log(indCart + " " + indList);

    if (indCart !== -1) {
      this.setState({
        itemDetail: cart[indCart]
      })
    } else {
      if (indList !== -1) {
        list[indList].quatity = 1
        this.setState({
          itemDetail: list[indList]
        })
      }
    }
    console.log(this.state.itemDetail);
    
  }
  onSendRate(id, ind) {
    // console.log(id + " " + ind);
    var { list } = this.state
    var index = this.findById(list, id)
    list[index].rate = ind
    this.setState({
      list
    })
    
  }
  onChangeCart(qua, val) {
    var { cart } = this.state
    var index = this.findById(cart, val.id)
    if (index === -1) {
      val.quatity = qua
      cart.push(val)
    } else {
      cart[index].quatity = qua
    }
    this.setState({ cart })
    localStorage.setItem("cart", JSON.stringify(cart))
  }
  onChangePage(ind){
    var {list, itemPerPage} = this.state
    var listPerPage = list.slice(itemPerPage*(ind-1), itemPerPage*(ind))
    this.setState({
      listPerPage,
      page: ind
    })
  }
  firstPage = () => {
    this.setState({
      page: 1
    })
  }
  previousPage = () => {
    var temp = this.state.page
    temp = temp===1? temp : --temp
    this.setState({
      page: temp
    })
  }
  lastPage = () => {
    var {list, itemPerPage} = this.state
    var len = Math.ceil((list.length/itemPerPage))
    this.setState({
      page: len
    })
  }
  nextPage = () => {
    var {list, itemPerPage} = this.state
    var len = Math.ceil((list.length/itemPerPage))
    var temp = this.state.page
    
    temp = temp===len? temp : ++temp
    console.log(temp);
    console.log(len);
    console.log(temp===len);
    this.setState({
      page: temp
    })
  }
  UNSAFE_componentWillMount() {
    var {list, itemPerPage, page} = this.state
    var listPerPage = list.slice(itemPerPage*(page-1), itemPerPage*(page))
    this.setState({listPerPage})

    this.setState({
      cart: JSON.parse(localStorage.getItem("cart"))
    })
  }
  render() {
    var { cart, list, listPerPage, categoryCurrent, itemPerPage, page, itemDetail } = this.state
    return (
      <Router>
        {/* <div> */}
        <Setup />
        <Nav cart={cart} />
        <Switch>
          <Route exact path="/">
            <Head />
            <section className="ftco-section bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-lg-10 order-md-last">
                    <Order list={list} setItem={listPerPage} categoryCurrent={categoryCurrent} onReset={this.onReset} changeDetail={(id) => this.changeDetail(id)} onSendRate={(id, ind) => this.onSendRate(id, ind)} onAddCart={(item) => this.onAddCart(item)} itemPerPage={itemPerPage} page={page} onChangePage={(ind) => this.onChangePage(ind)} firstPage={this.firstPage} previousPage={this.previousPage} lastPage={this.lastPage} nextPage={this.nextPage}/>
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
              {cart.length !== 0 ? <Cart cart={cart} removeCart={(id) => this.removeCart(id)} onChangeCart={(qua, item) => this.onChangeCart(qua, item)} /> : ""}
              {cart.length !== 0 ? <TotalCart cart={cart} /> : ""}
            </div>
          </Route>
        </Switch>
        <Footer />
        <Loader />
        {/* </div> */}
        <Modal itemDetail={itemDetail} onSendRate={(id, ind) => this.onSendRate(id, ind)} onChangeCart={(qua, val) => this.onChangeCart(qua, val)} />
      </Router>
    )
  }
}
