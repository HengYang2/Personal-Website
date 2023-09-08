const isFocusedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_IS_FOCUSED':
            return action.payload;
        default:
            return state;
    }
};

export default isFocusedReducer;

