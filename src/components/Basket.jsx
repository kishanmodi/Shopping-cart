import { useSelector, useDispatch } from 'react-redux';
import { checkItem, clearBasket } from '../redux/basket/basketActions';
export const Basket = () => {
    const basketItems = useSelector((state) => state.basket.items);
    const dispatch = useDispatch();
    return (
        <div className='col-md-5'>
            <div className='my-4 m-1 d-flex align-items-center justify-content-center'>
                <i className='fa-solid fa-bag-shopping ms-auto fa-lg me-1'></i>
                <h5 className='m-0'>Basket</h5>
                <button
                    onClick={() => dispatch(clearBasket())}
                    className='btn btn-dark ms-auto rounded-pill'
                >
                    <i className='fa-solid fa-trash '></i>
                </button>
            </div>

            {basketItems.map((basketItem) => {
                return (
                    <div
                        key={basketItem.id}
                        className='row p-2 border border-radius m-1 rounded-pill bg-light'
                    >
                        <div className='col-2 text-center p-0'>
                            <button
                                className='btn btn-outline-primary rounded-pill'
                                onClick={() => {
                                    dispatch(checkItem(basketItem));
                                }}
                            >
                                <i className='fa-solid fa-xmark'></i>
                            </button>
                        </div>
                        <div className='col-10 d-flex align-items-center justify-content-start'>
                            <h5
                                className='m-0'
                                style={basketItem.checked ? { textDecoration: 'line-through' } : null}
                            >
                                {basketItem.qty} {basketItem.name}
                            </h5>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
