import { ADD_ITEM_TO_BASKET, CHECKMARK_ITEM, CLEAR_BASKET } from './basketTypes';

export const addItem = (item) => {
    return {
        type: ADD_ITEM_TO_BASKET,
        payload: item
    };
};

export const checkItem = (item) => {
    return {
        type: CHECKMARK_ITEM,
        payload: item
    };
};

export const clearBasket = () => {
    return {
        type: CLEAR_BASKET
    };
};
