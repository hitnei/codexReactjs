import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../actions/index';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempStar: this.props.item.rate,
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
    onAddCart = (e, item) => {
        e.preventDefault()
        this.props.onAddCart(item)
    }
    changeDetail = (e, id) => {
        e.preventDefault()
        var { list, cart } = this.props
        var indCart = this.findById(cart, id)
        var indList = this.findById(list, id)
        if (indCart !== -1) {
            cart[indCart].rate = list[indList].rate
            this.props.changeDetail(cart[indCart])
        } else {
            if (indList !== -1) {
                list[indList].quatity = 1
                this.props.changeDetail(list[indList])
            }
        }
    }
    onChangeStar = (e, id, ind) => {
        e.preventDefault()
        this.setState({
            tempStar: ind
        })
    }
    onResetStar = () => {
        this.setState({
            tempStar: this.props.item.rate
        })
    }
    onSendRate = (e, id, ind) => {
        e.preventDefault()
        var { list } = this.props
        var index = this.findById(list, id)
        list[index].rate = ind
        this.props.changeDetail(list[index])
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        this.setState({
            tempStar: newProps.item.rate
        })
    }
    render() {
        var { link, name, status, price, id } = this.props.item;
        var { tempStar } = this.state

        return (
            <div className="col-sm-6 col-md-6 col-lg-4 ftco-animate fadeInUp ftco-animated">
                <div className="product">
                    <a href="/" className="img-prod"><img className="img-fluid" src={link} alt="Colorlib Template" />
                        <span className="status">{status}%</span>
                        <div className="overlay" onClick={(event) => this.changeDetail(event, id)} data-toggle="modal" data-target="#myModal" />
                    </a>
                    <div className="text py-3 px-3">
                        <h3><a href="/">{name}</a></h3>
                        <div className="d-flex">
                            <div className="pricing">
                                <p className="price"><span className="mr-2 price-dc">{price.toFixed(2)}$</span><span className="price-sale">{(price * (100 - status) / 100).toFixed(2)}$</span></p>
                            </div>
                            <div className="rating">
                                <p className="text-right" onMouseLeave={this.onResetStar}>
                                    <a href="/"><span className="material-icons" style={{ fontSize: "16px" }} onMouseEnter={(e) => this.onChangeStar(e, id, "1")} onClick={(e) => this.onSendRate(e, id, 1)}>{tempStar >= 1 ? "star" : "star_border"}</span></a>
                                    <a href="/"><span className="material-icons" style={{ fontSize: "16px" }} onMouseEnter={(e) => this.onChangeStar(e, id, "2")} onClick={(e) => this.onSendRate(e, id, 2)}>{tempStar >= 2 ? "star" : "star_border"}</span></a>
                                    <a href="/"><span className="material-icons" style={{ fontSize: "16px" }} onMouseEnter={(e) => this.onChangeStar(e, id, "3")} onClick={(e) => this.onSendRate(e, id, 3)}>{tempStar >= 3 ? "star" : "star_border"}</span></a>
                                    <a href="/"><span className="material-icons" style={{ fontSize: "16px" }} onMouseEnter={(e) => this.onChangeStar(e, id, "4")} onClick={(e) => this.onSendRate(e, id, 4)}>{tempStar >= 4 ? "star" : "star_border"}</span></a>
                                    <a href="/"><span className="material-icons" style={{ fontSize: "16px" }} onMouseEnter={(e) => this.onChangeStar(e, id, "5")} onClick={(e) => this.onSendRate(e, id, 5)}>{tempStar >= 5 ? "star" : "star_border"}</span></a>
                                </p>
                            </div>
                        </div>
                        <p className="bottom-area d-flex px-3">
                            <a href="/" className="add-to-cart text-center py-2 mr-1" onClick={(event) => this.onAddCart(event, this.props.item)} ><span>Add to cart <i className="material-icons" style={{ fontSize: "11px" }}>add_shopping_cart</i></span></a>
                            <a href="/" className="buy-now text-center py-2" data-toggle="modal" data-target="#myModal" onClick={(event) => this.changeDetail(event, id)}>Detail<span><i className="material-icons" style={{ fontSize: "11px" }}>menu</i></span></a>
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        cart: state.cart,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        changeDetail: (item) => {
            dispatch(actions.changeDetail(item))
        },
        // changeList: (list) => {
        //     dispatch(actions.changeList(list))
        // },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Item)