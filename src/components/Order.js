import React, { Component } from 'react'
import Item from './Item'
import Pagination from './Pagination'
import { connect } from 'react-redux'
import * as actions from './../actions/index';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listPerPage: []
        }
    }

    UNSAFE_componentWillMount() {
        var { itemPerPage, page, list } = this.props
        var listPerPage = list.slice(itemPerPage * (page - 1), itemPerPage * (page))
        this.setState({ listPerPage })
    }
    onReset = (e) => {
        this.props.onReset()
    }
    render() {
        var { list, categoryCurrent } = this.props
        var listLen = list.length
        var showItem = this.state.listPerPage.map((val, index) => {
            if (categoryCurrent === 0) {
                return (
                    <Item key={val.id} item={val} />
                )
            }
            else {
                return (
                    (val.category === categoryCurrent) ? <Item key={val.id} item={val} /> : <div key={val.id}></div>
                )
            }
        })
        // var showItem
        // if (categoryCurrent === 0){
        //     showItem = setItem.map((val, index) => {
        //         return (
        //             <Item key={val.id} item = {val} />
        //         )
        //     })
        // } else {
        //     showItem = list.map((val, index) => {
        //         return(
        //         (val.category === categoryCurrent)? <Item key={val.id} item = {val}/> : <div key={val.id}></div>
        //         )
        //     })
        // }
        return (
            <div>
                <div className="row">
                    {showItem}
                </div>
                <div className="row mt-1">
                    <div className="col text-center">
                        <div className="block-27">
                            {/* <ul>
                                <li><a href="https://colorlib.com/preview/theme/winkel/shop.html#">&lt;</a></li>
                                <li className="active"><span>1</span></li>
                                <li><a href="https://colorlib.com/preview/theme/winkel/shop.html#">2</a></li>
                                <li><a href="https://colorlib.com/preview/theme/winkel/shop.html#">3</a></li>
                                <li><a href="https://colorlib.com/preview/theme/winkel/shop.html#">4</a></li>
                                <li><a href="https://colorlib.com/preview/theme/winkel/shop.html#">5</a></li>
                                <li><a href="https://colorlib.com/preview/theme/winkel/shop.html#">&gt;</a></li>
                            </ul> */}
                            <button onClick={this.onReset} type="button" className="btn btn-primary">Reset</button>
                        </div>
                    </div>
                </div>
                <Pagination />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        categoryCurrent: state.categoryCurrent,
        setItem: state.listPerPage,
        itemPerPage: state.itemPerPage,
        page: state.page,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onReset: () => {
            dispatch(actions.resetCategoryCurrent())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order)