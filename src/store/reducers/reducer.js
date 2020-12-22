import * as actionTypes from '../actions/actionTypes';

const initialState = {
    firstName: '',
    middleName: '',
    lastName: ''

};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FIRST_NAME:
            return {
                ...state,
                firstName: action.payload
            };
        case actionTypes.MIDDLE_NAME:
            return {
                ...state,
                middleName: action.payload
            };
        case actionTypes.LAST_NAME:
            return {
                ...state,
                lastName: action.payload
            }
        default: return state
    }
}

export default reducer;