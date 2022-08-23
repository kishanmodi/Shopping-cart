import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/basket/basketActions';
export const GroceryList = () => {
    const groceryItems = useSelector((state) => state.grocery.items);
    const dispatch = useDispatch();
    // console.log(groceryItems);
    return (
        <div className='col-md-5'>
            <div className='my-4 m-1 d-flex align-items-center justify-content-center'>
                <i className='fa-solid fa-carrot me-1 fa-lg'></i>
                <h5 className='m-0'>Grocery List</h5>
            </div>
            {groceryItems.map((item) => {
                return (
                    <div
                        key={item.id}
                        className='row p-2 border border-radius m-1 rounded-pill bg-light'
                    >
                        <div className='col-2 text-center p-0'>
                            <button
                                className='btn btn-outline-primary rounded-pill'
                                onClick={() => {
                                    dispatch(addItem(item));
                                }}
                            >
                                <i className='fa-solid fa-plus'></i>
                            </button>
                        </div>
                        <div className='col-10 d-flex align-items-center justify-content-start'>
                            <h5 className='m-0'>{item.name}</h5>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
