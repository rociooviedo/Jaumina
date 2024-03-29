import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {logoutUser} from '../actions/userAction'
export default function NavBar() {
    const cartstate = useSelector((state) => state.cartReducer)
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch();
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-danger rounded">
                <a className="navbar-brand" href="/"> Jaumina</a>
                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><i style={{ color: 'black' }} className="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/*<ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart {cartState.cartItems.length}</a>
                        </li>
                    </ul>*/}
                    <ul className="navbar-nav ml-auto">
                        {currentUser ? (
                            <div className="dropdown mt-2">
                                <a style={{ color: 'black' }} className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {currentUser.name}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/orders">Pedidos</a>
                                    <a className="dropdown-item" href="#" onClick={() => { dispatch(logoutUser()) }}><li>Logout</li></a>
                                </div>
                            </div>
                        ) : (
                            <li className="nav-item">
                                <a className="nav-link link-light" href="/login">
                                    Login
                                </a>
                            </li>
                        )}
                        <li className="nav-item">
                            <a className="nav-link link-light" href="/cart">
                                Carrito {cartstate.cartItems.length}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}