import {cloneDeep} from 'lodash';

const itemReducer = (state = {items: [
                         {key: 882, value: 0},
                         {key: 123, value: 0},
                         {key: 937, value: 0},
                         {key: 762, value: 0},
                         {key: 831, value: 0},
                     ]}, action) => {
    switch (action.type){
        case 'moveLeft':
            let copy = cloneDeep(state);
            //
            // copy.items = copy.items.map(item => {
            //    if (item.key === action.activeKey) {
            //        item.value = 1;
            //    }
            //    return item;
            // });
            return Object.assign({}, state, {
                items: copy.items.map((item)=> {
                    if (item.key === action.activeKey) {
                        item.value = 1;
                    }
                    return item;
                })
            });

        case 'deleteItem':
            let copyDelete = cloneDeep(state);
            copyDelete.items = copyDelete.items.filter(item => !(item.key === action.key));
            return Object.assign({}, state, copyDelete);
        default:
            return state;
    }
}

export default itemReducer;