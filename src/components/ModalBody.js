import React, { Component } from 'react';

class ModalBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qua: 1
        }
    }
    
    onChange (e, id) {
        // console.log(id)
        // console.log(e.target.value)
        var qua = e.target.value
        qua = qua > 100? 100 : qua
        qua = qua!=0? Math.floor(qua) : qua
        qua = qua<=0? 1 : qua
        // this.props.onChangeCart(qua, id)
        this.setState({qua: qua})
    }
    onAddCart(e, id, qua, name) {
        // console.log(id);
        // console.log(qua);
        setTimeout(() => {
            alert(`Has add ${qua} "${name}" into Cart!`)
        }, 300);
        this.props.onChangeCart(id, qua)
    }
    render() {
        var { link, name, price, categ, quatity, status, id } = this.props.itemDetail
        // console.log(this.props.itemDetail)
        var totalPrice = ((price * (100 - status) / 100).toFixed(2))
        // console.log(totalPrice);
        
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
                                                <input type="number" name="quantity" className="quantity form-control input-number" step={1} min={1} max={100} defaultValue={this.state.qua} onChange={(e) => this.onChange(e, id)}/>
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
                                <a href="#" className="btn btn-lg btn-outline-primary text-uppercase" data-dismiss="modal" onClick={(event) => this.onAddCart(event, id, this.state.qua, name)}> <i className="fas fa-shopping-cart"/> Add to cart </a>
                            </article> {/* card-body.// */}
                        </aside> {/* col.// */}
                    </div> {/* row.// */}
                </div> {/* card.// */}

            </div>
        );
    }
}

export default ModalBody;