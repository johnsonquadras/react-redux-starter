import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {

    switch (action.type) {
        case "CREATE_USER":
            return [...state, Object.assign({}, action.user)];
         case "LOAD_USERS_SUCCESS":
            return action.users;   
        default:
            return state;
    }
}