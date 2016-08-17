/**
 * Created by sxd15 on 8/10/2016.
 */
export const ADD_LIGHTS = 'ADD_LIGHTS';
export const DELETE_LIGHT = 'DELETE_LIGHT';

export const LightsReducer = (state: any = [], {type, payload}) => {
    switch (type) {
        case ADD_LIGHTS:
            return payload;
        case DELETE_LIGHT:
            return state.filter(item => {
                return item.displayName !== payload.displayName;
            });
        default:
            return state;
    }
};