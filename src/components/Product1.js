import React, { Component } from 'react';
import * as Message from './../constants/Message';
class Product1 extends Component {
    render() {
        var { product1 } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product1.image}
                            className="img-fluid" alt={product1.name} />
                        <a href="#top">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="#top">{product1.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRating(product1.rating)}
                            </li>
                        </ul>
                        <p className="card-text">
                            {product1.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product1.price}$</span>
                            <span className="right">
                                <a  href="#section"
                                    className="btn-floating blue-gradient" 
                                    data-toggle="tooltip" 
                                    ata-placement="top" title="" 
                                    data-original-title="Add to Cart"
                                    onClick={ () => this.onAddtoCart(product1)}
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onAddtoCart = (product) =>{
        this.props.onAddtoCarts(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }
    showRating(rating) {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i key={i} className="fa fa-star"></i>)
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<i key={i + j} className="fa fa-star-o"></i>)
        }
        return result;
    }
}

export default Product1;
