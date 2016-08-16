/**
 * Created by sxd15 on 8/10/2016.
 */
export const ADD_USERS = 'ADD_USERS';
export const DELETE_USER = 'DELETE_USER';

export const UsersReducer = (state: any = [], {type, payload}) => {
    switch (type) {
        case ADD_USERS:
            return payload;
        case DELETE_USER:
            return state.filter(item => {
                return item.displayName !== payload.displayName;
            });
        default:
            return state;
    }
};