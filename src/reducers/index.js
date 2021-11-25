import { ADD_EVENT } from '../actions/index'

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_EVENT:
            const event = { dating: action.dating, product: action.product }
            const id = state.length + 1;
            return [...state, { id, ...event }];
        default:
            return state;
    }
};

export default reducer;