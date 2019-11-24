import React, { Component } from 'react'
import Item from './Item'
import Pagination from './Pagination'
import {connect} from 'react-redux'

class Order extends Component {
    onReset = (e) => {
        this.props.onReset()
    }
    render() {
        var {list, setItem, itemPerPage, page, categoryCurrent} = this.props
        var listLen = list.length
        var showItem = setItem.map((val, index) => {
            if (categoryCurrent === 0){
                return (
                    <Item key={val.id} item = {val} changeDetail={this.props.changeDetail} onSendRate={this.props.onSendRate} onAddCart={this.props.onAddCart}/>
                )
            }
            else{
                return(
                (val.category === categoryCurrent)? <Item key={val.id} item = {val} changeDetail={this.props.changeDetail} onAddCart={this.props.onAddCart}/> : <div key={val.id}></div>
                )
            }
        })
        // var showItem
        // if (categoryCurrent === 0){
        //     showItem = setItem.map((val, index) => {
        //         return (
        //             <Item key={val.id} item = {val} changeDetail={this.props.changeDetail} onSendRate={this.props.onSendRate} onAddCart={this.props.onAddCart}/>
        //         )
        //     })
        // } else {
        //     showItem = list.map((val, index) => {
        //         return(
        //         (val.category === categoryCurrent)? <Item key={val.id} item = {val} changeDetail={this.props.changeDetail} onAddCart={this.props.onAddCart}/> : <div key={val.id}></div>
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
                <Pagination listLen={listLen} itemPerPage={itemPerPage} list={list} page={page} onChangePage={this.props.onChangePage} firstPage={this.props.firstPage} previousPage={this.props.previousPage} nextPage={this.props.nextPage} lastPage={this.props.lastPage}/>
            </div>
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
    //   listAll: () => {
    //     dispatch(actions.toggleForm())
    //   },
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Order)