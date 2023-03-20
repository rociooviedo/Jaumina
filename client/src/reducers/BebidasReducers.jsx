export const getAllBebidasReducer = (state={bebidas : [] }, action) => {
    switch(action.type)
    {
        case 'GET_BEBIDAS_REQUEST' : return {
            loading: true,
            ...state
        }
        case 'GET_BEBIDAS_SUCCESS': return{
            loading: false,
            bebidas: action.payload
        }
        case 'GET_BEBIDAS_FAILED': return{
            error : action.payload,
            loading: false
        }
        default: return state
    }
} 