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
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Modal from './components/Modal'
import { connect } from 'react-redux'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // itemDetail: "null",
      // cart: JSON.parse(localStorage.getItem("cart")),
      // itemPerPage: 4,
      // page: 1,
      // listPerPage: []
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
  removeCart(id) {
    var { cart } = this.state
    var index = this.findById(cart, id)
    cart.splice(index, 1)
    // console.log(cart);

    this.setState({ cart })
    localStorage.setItem("cart", JSON.stringify(cart))

  }
  changeDetail(id) {
    var { list } = this.props
    var { cart } = this.state
    var indCart = this.findById(cart, id)
    var indList = this.findById(list, id)
    if (indCart !== -1) {
      cart[indCart].rate = list[indList].rate
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
  }
  onSendRate(id, ind) {
    // console.log(id + " " + ind);
    var { list } = this.state
    var index = this.findById(list, id)
    list[index].rate = ind
    this.setState({
      list,
      itemDetail: list[index]
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
  onChangePage(ind) {
    var { list, itemPerPage } = this.state
    var listPerPage = list.slice(itemPerPage * (ind - 1), itemPerPage * (ind))
    this.setState({
      listPerPage,
      page: ind
    })
  }
  firstPage = () => {
    //   this.setState({
    //     page: 1
    //   })
    this.onChangePage(1)
  }
  previousPage = () => {
    var temp = this.state.page
    temp = temp === 1 ? temp : --temp
    // this.setState({
    //   page: temp
    // })
    this.onChangePage(temp)
  }
  lastPage = () => {
    var { list, itemPerPage } = this.state
    var len = Math.ceil((list.length / itemPerPage))
    // this.setState({
    //   page: len
    // })
    this.onChangePage(len)
  }
  nextPage = () => {
    var { list, itemPerPage } = this.state
    var len = Math.ceil((list.length / itemPerPage))
    var temp = this.state.page
    temp = temp === len ? temp : ++temp

    // this.setState({
    //   page: temp
    // })
    this.onChangePage(temp)
  }
  UNSAFE_componentWillMount() {
  //   var { list } = this.props
  //   var { itemPerPage, page } = this.state
  //   var listPerPage = list.slice(itemPerPage * (page - 1), itemPerPage * (page))
  //   this.setState({ listPerPage })

    this.setState({
      cart: JSON.parse(localStorage.getItem("cart"))
    })
  }
  render() {
    var { cart, itemDetail } = this.state
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
                    <Order changeDetail={(id) => this.changeDetail(id)} onSendRate={(id, ind) => this.onSendRate(id, ind)} onChangePage={(ind) => this.onChangePage(ind)} firstPage={this.firstPage} previousPage={this.previousPage} lastPage={this.lastPage} nextPage={this.nextPage} />
                  </div>
                  <div className="col-md-4 col-lg-2 sidebar">
                    <Sidebar onReceiveType={this.onReceiveType} />
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


const mapStateToProps = state => {
  return {
    list: state.list
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)