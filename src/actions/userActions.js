import usersApi from '../api/mockUsersApi';

export function createUser(user) {
    return {
        type: "CREATE_USERS",
        user: user
    };
}

export function loadUsersSuccess(users) {
    return {
        type: "LOAD_USERS_SUCCESS",
        users: users
    };
}

export function deleteUser(user) {
    return function (dispatch) {
        return usersApi.deleteUser(user).then(() => {
            dispatch(loadUsers());
        }).catch(error => {
            throw error;
        });
    };
}

export function loadUsers() {
    return function (dispatch) {
        return usersApi.getAllUsers().then((users) => {
            dispatch(loadUsersSuccess(users));
        }).catch(error => {
            throw error;
        });
    };
}