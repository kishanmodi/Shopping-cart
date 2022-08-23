import { createStore, combineReducers } from 'redux';
import { basketReducer } from './basket/basketReducer';
import { groceryReducer } from './grocery/groceryReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ grocery: groceryReducer, basket: basketReducer });
export const store = createStore(rootReducer, composeWithDevTools());
