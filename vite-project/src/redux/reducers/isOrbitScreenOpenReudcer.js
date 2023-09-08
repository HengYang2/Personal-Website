const isOrbitScreenOpenReudcer = (state = true, action) => {
    switch (action.type) {
        case 'SET_ORBIT_SCREEN_OPEN':
            return action.payload;
        default:
            return state;
    }
};

export default isOrbitScreenOpenReudcer;