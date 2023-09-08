const currentViewReducer = (state = 'laptop', action) => {
    switch (action.type) {
        case 'SET_CURRENT_VIEW':
            return action.payload;
        default:
            return state;
    }
};

export default currentViewReducer;
