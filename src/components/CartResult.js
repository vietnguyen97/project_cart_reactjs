import React, { Component } from 'react';


class CartResult extends Component {
    render() {
        var {item} = this.props;
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotal(item)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }
    showTotal = (carted) =>{
        var total = 0;
        if(carted.length > 0) {
            for (var i = 0; i < carted.length; i++){
                total += carted[i].product.price * carted[i].quantity;
            }
        }
        return total;
    }
}

export default CartResult;
