import { ADD_ITEM_TO_BASKET, CHECKMARK_ITEM, CLEAR_BASKET } from './BasketTypes';
const basketInitialState = {
    items: []
};

export const basketReducer = (state = basketInitialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_BASKET:
            // const item = state.items.filter((i) => {
            //     return i.name === action.payload;
            // });
            const itemIndex = state.items.findIndex(i => i.name === action.payload)
            const newItems = state.items

            if (itemIndex != -1) {
                const item = newItems[itemIndex]
                item.qty += 1;
                newItems[itemIndex] = item
            } else {
                newItems.push({ name: action.payload, qty: 1, checked: false })
            }
            
            return {
                ...state,
                items: newItems
            }
        case CHECKMARK_ITEM:
            return {
                ...state,
                items: { ...item, checked: !item.checked }
            };
        case CLEAR_BASKET:
            return {
                ...state,
                items: []
            };
        default:
            return state;
    }
};
