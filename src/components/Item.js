import React, { Component } from 'react'
// import Modal from './Modal';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempStar: this.props.item.rate,
        }
    }
    onAddCart = (e, id) => {
        e.preventDefault()
        this.props.onAddCart(id)
    }
    changeDetail = (e, id) => {
        e.preventDefault()
        this.props.changeDetail(id)
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
        this.props.onSendRate(id, ind)
    }
    UNSAFE_componentWillReceiveProps(newProps){
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
                        <div className="overlay" onClick={(event) => this.changeDetail(event, id)} data-toggle="modal" data-target="#myModal"/>
                    </a>
                    <div className="text py-3 px-3">
                        <h3><a href="/">{name}</a></h3>
                        <div className="d-flex">
                            <div className="pricing">
                                <p className="price"><span className="mr-2 price-dc">{price.toFixed(2)}$</span><span className="price-sale">{(price * (100 - status) / 100).toFixed(2)}$</span></p>
                            </div>
                            <div className="rating">
                                <p className="text-right" onMouseLeave={this.onResetStar}>
                                    <a href="/"><span className="material-icons" style={{ fontSize: "16px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "1")} onClick={(e) => this.onSendRate(e, id, 1)}>{tempStar>=1? "star" : "star_border"}</span></a>
                                    <a href="/"><span className="material-icons" style={{ fontSize: "16px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "2")} onClick={(e) => this.onSendRate(e, id, 2)}>{tempStar>=2? "star" : "star_border"}</span></a>
                                    <a href="/"><span className="material-icons" style={{ fontSize: "16px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "3")} onClick={(e) => this.onSendRate(e, id, 3)}>{tempStar>=3? "star" : "star_border"}</span></a>
                                    <a href="/"><span className="material-icons" style={{ fontSize: "16px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "4")} onClick={(e) => this.onSendRate(e, id, 4)}>{tempStar>=4? "star" : "star_border"}</span></a>
                                    <a href="/"><span className="material-icons" style={{ fontSize: "16px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "5")} onClick={(e) => this.onSendRate(e, id, 5)}>{tempStar>=5? "star" : "star_border"}</span></a>
                                </p>
                            </div>
                        </div>
                        <p className="bottom-area d-flex px-3">
                            <a href="/" className="add-to-cart text-center py-2 mr-1" onClick={(event) => this.onAddCart(event, id)} ><span>Add to cart <i className="material-icons" style={{fontSize: "11px"}}>add_shopping_cart</i></span></a>
                            <a href="/" className="buy-now text-center py-2" data-toggle="modal" data-target="#myModal" onClick={(event) => this.changeDetail(event, id)}>Detail<span><i className="material-icons" style={{fontSize: "11px"}}>menu</i></span></a>
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}
