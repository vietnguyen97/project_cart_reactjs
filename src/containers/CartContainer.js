import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import {deleteProduct, changeMessage, updateProduct} from './../actions/index';
class CartContainer extends Component {
    render() {
        var { carts } = this.props;
        return (
            <Cart>
                {this.showCart(carts)}
                {this.showTotal(carts)}
            </Cart>
        );
    }
    showCart = (carted) =>{
        var {onDeleteProduct, onChangeMessage, onUpdateProduct} =this.props;
        var result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;
        if(carted.length > 0){
            result = carted.map((item, index) =>{
                return (
                    <CartItem
                        key = {index}
                        item = {item}
                        onDeleteProduct={onDeleteProduct}
                        onChangeMessage={onChangeMessage}
                        onUpdateProduct={onUpdateProduct}
                    />
                );
            });
        }
        return result;
    }
    showTotal = (carted) => {
        var result = null;
        if(carted.length > 0){
            result = <CartResult item={carted}/>
        }
        return result;
    }
}
CartContainer.propTypes = {
    carts: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id : PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => {
    return {
        carts : state.cart
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        onDeleteProduct : (product) =>{
            dispatch(deleteProduct(product));
        },
        onChangeMessage : (message) =>{
            dispatch(changeMessage(message));
        },
        onUpdateProduct : (product, quantity) =>{
            dispatch(updateProduct(product, quantity));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
