import * as types from './../constants/ActionType';

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
export const changeMessage = (message) =>{
    return{
        type : types.CHANGE_MESSAGE,
        message
    }
}
export const deleteProduct = (product) =>{
    return {
        type : types.DELETE_PRODUCT,
        product
    }
}
export const updateProduct = (product, quantity) =>{
    return {
        type : types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}