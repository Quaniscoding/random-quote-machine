import { SET_QUOTE } from './action';

const initialState = {
    text: 'Loading quote...',
    author: '',
    color: '#282c34'
};

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUOTE:
            return {
                ...state,
                text: action.payload.text,
                author: action.payload.author,
                color: action.payload.color
            };
        default:
            return state;
    }
};

export default quoteReducer;
