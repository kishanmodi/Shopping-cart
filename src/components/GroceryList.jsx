import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/items/basketActions';
export const GroceryList = () => {
    const groceryItems = useSelector((state) => state.grocery.items);
    const dispatch = useDispatch();
    // console.log(groceryItems);   
    return (
        <div>
            {groceryItems.map((item) => {
                return (
                    <div key={item}>
                        <button
                            onClick={() => {
                                dispatch(addItem(item));
                            }}
                        >
                            +
                        </button>
                        <h3>{item}</h3>
                    </div>
                );
            })}
        </div>
    );
};
