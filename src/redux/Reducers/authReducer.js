const INITIAL_STATE = {
    username: '',
    image: '',
    dataCats: [],
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {...state,username: action.payload}
        case 'GET_DATA':
            return {...state,dataCats: action.payload}
        case 'IMAGE':
            return {...state,image: action.payload}
        case 'USER_LOGOUT':
            return {...state,username: ''}
        default:
            return state;
    }
}