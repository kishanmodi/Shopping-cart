import { ADD_ITEM_TO_BASKET, CHECKMARK_ITEM, CLEAR_BASKET } from './basketTypes';
const basketInitialState = {
    items: []
};

const getItemIndex = (items, id) => {
    return items.findIndex((i) => i.id === id);
};
export const basketReducer = (state = basketInitialState, action) => {
    let newItems = [...state.items];
    let itemIndex;

    switch (action.type) {
        case ADD_ITEM_TO_BASKET:
            itemIndex = getItemIndex(state.items, action.payload.id);
            if (itemIndex !== -1) {
                let item = newItems[itemIndex];
                item.qty += 1;
                newItems[itemIndex] = item;
            } else {
                newItems.push({ id: action.payload.id, name: action.payload.name, qty: 1, checked: false });
            }

            return {
                ...state,
                items: newItems
            };
        case CHECKMARK_ITEM:
            itemIndex = getItemIndex(state.items, action.payload.id);

            if (itemIndex !== -1) {
                let item = newItems[itemIndex];
                item.checked = !item.checked;
                newItems[itemIndex] = item;
            }
            return {
                ...state,
                items: newItems
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
