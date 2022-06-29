import { ADD_USER, DELETE_USER, EDIT_USER, GET_DATA } from "./type";

const initialstate = {
    user : [],
    // post : []
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
                user : action.payload
            }
            case DELETE_USER :
                return {
                    ...state,
                    user : state.user.find((item) => item.id != action.payload)
                }
                case EDIT_USER:
                    return{
                        ...state,
                         user : action.payload
                    }
        default:
            return state;
    }
}

export default userReducer;