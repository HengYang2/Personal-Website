const isAnimationFinishedReducer = (state = true, action) => {
    switch (action.type) {
        case 'SET_IS_ANIMATION_FINISHED':
            return action.payload;
        default:
            return state;
    }
};

export default isAnimationFinishedReducer;

