const isPortalOpenReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_PORTAL_OPEN':
            return action.payload;
        default:
            return state;
    }
};

export default isPortalOpenReducer;