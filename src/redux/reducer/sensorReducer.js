import { NEW_VALUE} from '../actions';
const initialState = {
	newValue: null,
	data: []
	}

	const sensorReducer = (state = initialState, action) => {
    switch(action.type) {
        case NEW_VALUE: 
            return {
                ...state,
                newValue: action.payload.value
            }
        
        default: 
            return state;
    }
}
export default sensorReducer;