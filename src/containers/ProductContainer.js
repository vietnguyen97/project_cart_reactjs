import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products';
import Product1 from './../components/Product1';
import PropTypes from 'prop-types';
import {addToCart, changeMessage} from './../actions/index';
class ProductContainer extends Component {
    render() {
        var {producted} = this.props;
        return (
            <Products>
                {this.showProduct(producted)}
            </Products>
        );
    }
    showProduct(producted){
        var result = null;
        var {onAddtoCart, onChangeMessage} = this.props;
        if(producted.length > 0){
            result = producted.map((el, index) =>{
                return <Product1 
                    key = {index} 
                    product1={el}
                    onAddtoCarts={onAddtoCart}
                    onChangeMessage = {onChangeMessage}
                />
            });
        }
        return result;
    }
}
ProductContainer.propTypes = {
    producted : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired
        })
    ).isRequired,
    onAddtoCart:PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired
}

const mapStateToProps = state =>{
    return {
        producted : state.products
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        onAddtoCart : (product) =>{
            dispatch(addToCart(product, 1));
        },
        onChangeMessage : (message) =>{
            dispatch(changeMessage(message));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductContainer);
