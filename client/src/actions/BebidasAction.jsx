import axios from 'axios';

export const getAllBebidas = () => async dispatch => {
    dispatch({ type: 'GET_BEBIDAS_REQUEST' })
    try {
        const response = await axios.get('/api/bebidas/getallbebidas')
        console.log(response);
        dispatch({ type: 'GET_BEBIDAS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_BEBIDAS_FAILED', payload: error })
    }
}
export const filtrarBebidas = (searchkey, categoria) => async dispatch => {


    dispatch({ type: 'GET_BEBIDAS_REQUEST' })

    try {
        var filteredBebidas;
        const response = await axios.get('/api/bebidas/getallbebidas')
        filteredBebidas = response.data.filter(bebida => bebida.nombre.toLowerCase().includes(searchkey))

        if (categoria != 'gaseosas') {
            filteredBebidas = response.data.filter(bebida => bebida.categoria.toLowerCase() == categoria)

        }
        dispatch({ type: 'GET_BEBIDAS_SUCCESS', payload: filteredBebidas })
    } catch (error) {
        dispatch({ type: 'GET_BEBIDAS_FAILED', payload: error })
    }

}