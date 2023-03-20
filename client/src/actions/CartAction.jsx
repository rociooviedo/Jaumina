export const addToCart = (bebida, quantity, varient) => (dispatch, getState) => {

    var cartItem = {
        name: bebida.name,
        _id: bebida._id,
        image: bebida.image,
        varient: varient,
        quantity: Number(quantity),
        prices: bebida.prices,
        price: bebida.prices[0][varient] * quantity
    }

    if (cartItem.quantity > 10) {
        alert('You cannot add more than  10 quantities')
    }
    else {
        if (cartItem.quantity < 1) {
            dispatch({ type: 'DELETE_FROM_CART', payload: bebida })
        }
        else {
            dispatch({ type: "ADD_TO_CART", payload: cartItem });
            localStorage.setItem(
                "cartItems",
                JSON.stringify(getState().cartReducer.cartItems)
            );
        }
    }

    /*const cartItems = getState().CartReducer.cartItems
    console.log(cartItems,'as')
    localStorage.setItem('cartItems', JSON.stringify(cartItems))*/
}

export const deleteFromCart = (bebida) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: bebida })
    const cartItems = getState().CartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}