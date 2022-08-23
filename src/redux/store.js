import { createStore, combineReducers } from 'redux';
import { basketReducer } from './items/basketReducer';
import { groceryReducer } from './grocery/groceryReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({ grocery: groceryReducer, basket: basketReducer });
export const store = createStore(reducer, composeWithDevTools());
