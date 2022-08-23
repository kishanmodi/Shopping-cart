const groceryList = {
    items: [
        { id: 0, name: 'Strawberry' },
        { id: 1, name: 'Blueberry' },
        { id: 2, name: 'Orange' },
        { id: 3, name: 'Banana' },
        { id: 4, name: 'Apple' },
        { id: 5, name: 'Carrot' },
        { id: 6, name: 'Celery' },
        { id: 7, name: 'Mushroom' },
        { id: 8, name: 'Green Pepper' },
        { id: 9, name: 'Eggs' },
        { id: 10, name: 'Cheese' },
        { id: 11, name: 'Chicken' },
        { id: 12, name: 'Fish' },
        { id: 13, name: 'Rice' },
        { id: 14, name: 'Pasta' },
        { id: 15, name: 'Bread' }
    ]
};

export const groceryReducer = (state = groceryList, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
