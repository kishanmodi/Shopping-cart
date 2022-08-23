import React from 'react';
import { Basket } from './Basket';
import { GroceryList } from './GroceryList';
import { Header } from './Header';

export const MainContainer = () => {
    return (
        <div className='container-fluid p-0'>
            <Header />
            <div className='container row m-auto d-flex justify-content-between mb-3'>
                <GroceryList />
                <Basket />
            </div>
        </div>
    );
};
