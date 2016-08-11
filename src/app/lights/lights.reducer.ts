/**
 * Created by sxd15 on 8/10/2016.
 */

export const LightsReducer = (state: any = [], {type, payload}) => {
    let index: number;
    switch (type) {
        case 'ADD_ITEMS':
            return payload;
        case 'DELETE_ITEM':
            let newState = state.filter(item => {
                return item.displayName !== payload.displayName;
            });
            return newState;
        default:
            return state;
    }
};