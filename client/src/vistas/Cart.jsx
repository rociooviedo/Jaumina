import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/CartAction'
import { deleteFromCart } from "../actions/CartAction";
import Checkout from "../components/Checkout";

const Cart =()=> {

    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;
    console.log("valor", cartItems);
    var subTotal = cartItems.reduce((x, item) => x + item.precio, 0)
    const dispatch = useDispatch();
    return (
        <div>
            <div className="row justify-content-center  p-2">
                <div className="col-md-6">
                    <h2 style={{ fontSize: '40px' }}>Mi carrito</h2>

                    {cartItems.map(item => {
                        return <div className="flex-container">

                            <div className='text-left m-1 w-100'>
                                <h1>{item.nombre} [{item.varient}]</h1>
                                <h1>Precio : {item.quantity} * {item.precios[0][item.varient]} = {item.precio}</h1>
                                <h1 style={{ display: 'inline' }}>Cantidad: </h1>
                                <i className="fa fa-plus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}></i>
                                <b>{item.quantity}</b>
                                <i className="fa fa-minus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}></i>
                                <hr />
                            </div>
                            <div className='m-1 w-100'>
                                <img src={item.imagen} style={{ height: '80px', height: '80px' }} />
                            </div>
                            <div className='m-1 w-100'>
                                <i className="fa fa-trash mt-5" aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }}></i>
                            </div>

                        </div>
                    })}
                </div>
                <div className="col-md-4 text-right">
                    <h2 style={{ fontSize: '40px' }}>SubTotal:{subTotal}/Gs-</h2>
                    <Checkout subtotal={subTotal} />

                </div>
            </div>
        </div>
    )
}
export default Cart;