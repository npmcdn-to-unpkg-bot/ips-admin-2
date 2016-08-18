import { LightsReducer, Observable } from './lights';

describe('LightsReducer::', ()=> {

    it('returns and empty array by default', ()=>{
        let defaultState = LightsReducer(undefined, {type: 'random', payload: {}});
        expect(defaultState).toEqual([]);
    })

    it('ADD_ITEMS adds the provided payload', ()=>{
        let addItem = LightsReducer(undefined, {type: 'ADD_ITEMS', payload: 'payload'});
        expect(addItem).toEqual('payload');
    })

    it('DELETE_ITEM removes the provided payload', ()=>{
        let removeItem = LightsReducer([{displayName: 'random'},{displayName: 'payload'}], {type: 'DELETE_ITEM', payload: {displayName:'payload'}});
        expect(removeItem).toEqual([{displayName:'random'}]);
    })


});

