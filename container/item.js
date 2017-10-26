import {connect} from 'react-redux';
import Item from '../component/item';
import * as action from '../action/actions';

const  mapStateToProps = (state) => ({
    items: state.item.items
});

const mapDispatchToProps = (dispatch) => ({
   moveLeft(index) {
       dispatch(action.moveLeft(index))
   },

   deleteItem(key){
       dispatch(action.deleteItem(key));
   }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Item);