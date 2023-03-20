export const addToCart = (bebida, quantity, varient) => (dispatch, getState) => {

    var cartItem = {
        nombre: bebida.nombre,
        _id: bebida._id,
        imagen: bebida.imagen,
        varient: varient,
        quantity: Number(quantity),
        precios: bebida.precios,
        precio: bebida.precios[0][varient] * quantity
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
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}