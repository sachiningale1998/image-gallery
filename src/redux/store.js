import { legacy_createStore as createStore } from "redux";

const initStore ={
    searchData: []
}


const reducer = function (state = initStore, action){
    switch(action.type){
        case "SET_SEARCH_DATA":
            return {
                ...state,
                searchData : action.payload
            }
            default:
                return state
    }
}

const store = createStore(reducer);
export default store;