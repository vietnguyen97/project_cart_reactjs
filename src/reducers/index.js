import { combineReducers} from 'redux';
import products from './product';
import cart from './cart';
import message from './message';

const appReducers = combineReducers({
    products : products,
    cart : cart,
    message : message
});
export default appReducers;