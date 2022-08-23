import { ADD_ITEM_TO_BASKET, CHECKMARK_ITEM, CLEAR_BASKET } from './BasketTypes';
const basketInitialState = {
    items: []
};

export const basketReducer = (state = basketInitialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_BASKET:
            const item = state.items.filter((i) => {
                return i.name === action.payload;
            });
            console.log(item);
            if (item.length !== 0) {
                return {
                    items: [...state.items, { ...item, qty: item.qty + 1 }]
                };
            } else {
                return {
                    items: [...state.items, { name: action.payload, id: action.payload, qty: 1, checked: false }]
                };
            }
        case CHECKMARK_ITEM:
            return {
                ...state,

                item: { ...item, checked: !item.checked }
            };
        case CLEAR_BASKET:
            return {
                items: []
            };
        default:
            return state;
    }
};
