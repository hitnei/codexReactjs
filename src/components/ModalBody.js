import React, { Component } from 'react';

class ModalBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qua: 1,
            tempStar: this.props.itemDetail.rate
        }
    }
    onChange(e, id) {
        var qua = e.target.value
        qua = qua > 100 ? 100 : qua
        qua = qua != 0 ? Math.floor(qua) : qua
        qua = qua <= 0 ? 1 : qua
        this.setState({ qua: qua })
    }
    onAddCart(e, id, qua, name) {
        setTimeout(() => {
            alert(`Has add ${qua} "${name}" into Cart!`)
        }, 300);
        this.props.onChangeCart(id, qua)
    }
    onResetStar = () => {
        this.setState({
            tempStar: this.props.itemDetail.rate
        })
    }
    onChangeStar = (e, id, ind) => {
        e.preventDefault()        
        this.setState({
            tempStar: ind
        })
    }
    onCheckType = (i) => {
        var {tempStar} = this.state
        var {rate} = this.props.itemDetail
        if (typeof(tempStar)==="undefined")
            if (rate>=i) return "star"
            else return "start_border"
        else
            if (tempStar>=i) return "star"
            else return "star_border"
    }
    onSendRate(e, id, ind){
        e.preventDefault()
        this.props.onSendRate(id, ind)
    }
    componentWillReceiveProps(newProps){
      this.setState({
          tempStar: newProps.itemDetail.rate
      })
    }
    render() {
        var { link, name, price, categ, quatity, status, id, rate } = this.props.itemDetail
        var { tempStar } = this.state
        // console.log(tempStar);
        
        var totalPrice = ((price * (100 - status) / 100).toFixed(2))
        return (
            <div>
                <div className="card">
                    <div className="row">
                        <aside className="col-sm-5 border-right">
                            <article className="gallery-wrap">
                                <div className="img-big-wrap">
                                    <img src={link} />
                                </div> {/* slider-product.// */}
                                {/* <div className="img-small-wrap">
                                    <div className="item-gallery"> <img src="https://s9.postimg.org/tupxkvfj3/image.jpg" /> </div>
                                </div>  */}
                                {/* slider-nav.// */}
                            </article> {/* gallery-wrap .end// */}
                        </aside>
                        <aside className="col-sm-7">
                            <article className="card-body p-5">
                                <h3 className="title mb-3">{name}</h3>
                                <div className="rating d-flex">
                                    <p className="text-left mr-4" onMouseLeave={this.onResetStar}>
                                        <a href="#" className="mr-2">5.0</a>
                                        {/* <a href="#"><span className="material-icons" style={{ fontSize: "12px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "1")}>{this.onCheckType(1)}</span></a>
                                        <a href="#"><span className="material-icons" style={{ fontSize: "12px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "2")}>{this.onCheckType(2)}</span></a>
                                        <a href="#"><span className="material-icons" style={{ fontSize: "12px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "3")}>{this.onCheckType(3)}</span></a>
                                        <a href="#"><span className="material-icons" style={{ fontSize: "12px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "4")}>{this.onCheckType(4)}</span></a>
                                        <a href="#"><span className="material-icons" style={{ fontSize: "12px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "5")}>{this.onCheckType(5)}</span></a> */}
                                        
                                        <a href="#"><span className="material-icons" style={{ fontSize: "12px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "1")} onClick={(e) => this.onSendRate(e, id, 1)}>{tempStar>=1? "star" : "star_border"}</span></a>
                                        <a href="#"><span className="material-icons" style={{ fontSize: "12px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "2")} onClick={(e) => this.onSendRate(e, id, 2)}>{tempStar>=2? "star" : "star_border"}</span></a>
                                        <a href="#"><span className="material-icons" style={{ fontSize: "12px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "3")} onClick={(e) => this.onSendRate(e, id, 3)}>{tempStar>=3? "star" : "star_border"}</span></a>
                                        <a href="#"><span className="material-icons" style={{ fontSize: "12px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "4")} onClick={(e) => this.onSendRate(e, id, 4)}>{tempStar>=4? "star" : "star_border"}</span></a>
                                        <a href="#"><span className="material-icons" style={{ fontSize: "12px" }} onMouseEnter ={(e)=>this.onChangeStar(e, id, "5")} onClick={(e) => this.onSendRate(e, id, 5)}>{tempStar>=5? "star" : "star_border"}</span></a>
                                    </p>
                                    <p className="text-left mr-4">
                                        <a href="#" className="mr-2">100 <span>Rating</span></a>
                                    </p>
                                    <p className="text-left">
                                        <a href="#" className="mr-2">500 <span>Sold</span></a>
                                    </p>
                                </div>
                                <p className="price-detail-wrap">
                                    <span className="price h3 text-warning">
                                        <span className="currency">Price: </span><span className="num">{totalPrice}$</span>
                                    </span>
                                </p> {/* price-detail-wrap .// */}
                                <dl className="item-property">
                                    <dt>Description</dt>
                                    <dd><p>Here goes description consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco </p></dd>
                                </dl>
                                <dl className="param param-feature">
                                    <dt>Type</dt>
                                    <dd>{categ}</dd>
                                </dl>  {/* item-property-hor .// */}
                                <dl className="param param-feature">
                                    <dt>Color</dt>
                                    <dd>Black and white</dd>
                                </dl>  {/* item-property-hor .// */}
                                <dl className="param param-feature">
                                    <dt>Delivery</dt>
                                    <dd>Russia, USA, and Europe</dd>
                                </dl>  {/* item-property-hor .// */}
                                <hr />
                                <div className="row">
                                    <div className="col-sm-5">
                                        {/* <dl className="param param-inline">
                                            <dt>Quantity: </dt> */}
                                        <h6 className="">Quantity</h6>
                                        <div className="input-group mb-3">
                                            <input type="number" name="quantity" className="quantity form-control input-number" step={1} min={1} max={100} defaultValue={this.state.qua} onChange={(e) => this.onChange(e, id)} />
                                        </div>
                                        {/* </dl>  item-property .// */}
                                    </div> {/* col.// */}
                                    <div className="col-sm-7">
                                        <dl className="param param-inline">
                                            <dt>Size: </dt>
                                            <dd>
                                                <label className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                                    <span className="form-check-label">SM</span>
                                                </label>
                                                <label className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                                    <span className="form-check-label">MD</span>
                                                </label>
                                                <label className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                                    <span className="form-check-label">XXL</span>
                                                </label>
                                            </dd>
                                        </dl>  {/* item-property .// */}
                                    </div> {/* col.// */}
                                </div> {/* row.// */}
                                <hr />
                                {/* <a href="#" className="btn btn-lg btn-primary text-uppercase"> Buy now </a> */}
                                <a href="#" className="btn btn-lg btn-outline-primary text-uppercase" data-dismiss="modal" onClick={(event) => this.onAddCart(event, id, this.state.qua, name)}> <i className="fas fa-shopping-cart" /> Add to cart </a>
                            </article> {/* card-body.// */}
                        </aside> {/* col.// */}
                    </div> {/* row.// */}
                </div> {/* card.// */}

            </div>
        );
    }
}

export default ModalBody;