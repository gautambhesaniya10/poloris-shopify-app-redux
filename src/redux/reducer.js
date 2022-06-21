import { ADD_USER, GET_DATA } from "./type";

const initialstate = {
    user : [],
    post : []
};

const userReducer = (state = initialstate , action ) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                user : action.payload
            }
            case ADD_USER : 
            return{
                ...state,
                post : action.payload
            }
        default:
            return state;
    }
}

export default userReducer;