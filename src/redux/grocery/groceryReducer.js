const groceryList = {
    items: [
        'Strawberry',
        'Blueberry',
        'Orange',
        'Banana',
        'Apple',
        'Carrot',
        'Celery',
        'Mushroom',
        'Green Pepper',
        'Eggs',
        'Cheese',
        'Butter',
        'Chicken',
        'Fish',
        'Rice',
        'Pasta',
        'Bread'
    ]
};

export const groceryReducer = (state = groceryList, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
