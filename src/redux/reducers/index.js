const initialState = {
    cartCount: localStorage.getItem("cart-count"),
    products: []
}
const addReducers = (state = initialState,{type , payload}) => {
    switch(type){
        case "ADD" : {
            return {...state, cartCount: parseInt(state.cartCount) + parseInt(payload)};
        }
        case "LOAD_PRODUCTS" : {
            return {...state, products: [...payload]}
        }
        case "PRODUCT_DATA" : {
            
        }
        default : {
            return state;
        }
    }
}
export default addReducers;