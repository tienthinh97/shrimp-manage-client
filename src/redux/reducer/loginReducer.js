import { FETCH_DATA_ERROR, 
    FETCH_DATA_SUCCESS, 
    FETCH_DATA_PENDING,
    USERNAME, PASSWORD,  
    IS_LOGIN, TOKEN, 
    SIGNUP_SUCCESS,
    LOGOUT
    } from '../actions';
const initialState = {
    pending: false,
    data: [],
    token: null,
    error: null,
    username: '',
    password: '',
    isLogin: false,
    success: false,
    }

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_PENDING: 
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload.user
            }
        case FETCH_DATA_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }
        case USERNAME:
            return {
                ...state,
                username: action.username
            }
        case PASSWORD:
            return {
                ...state,
                password: action.password
            }
        case IS_LOGIN:
            return {
                ...state,
                isLogin: true
            }
        case LOGOUT:
            return {
                ...state,
                isLogin: false
            }
        case TOKEN:
            return {
                ...state,
                token: action.token
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                success: true
            }
        default: 
            return state;
    }
}
export default loginReducer;