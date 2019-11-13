import React, { Component } from 'react';
import ModalBody from './ModalBody';

class Modal extends Component {
    render() {
        var { itemDetail } = this.props
        // console.log(this.props.itemDetail)
        return (
            <div className="modal fade bd-example-modal-lg" id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">{itemDetail.name}</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <ModalBody itemDetail={itemDetail} onChangeCart={this.props.onChangeCart} />
                        </div>
                        {/* Modal footer */}
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;