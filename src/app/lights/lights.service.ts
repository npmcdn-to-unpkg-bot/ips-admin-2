import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Store} from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { ILights } from './lights.interface';


export interface AppStore {
    myLights: ILights[];
}

//-------------------------------------------------------------------
// ITEMS STORE/REDUCER
//-------------------------------------------------------------------
export const MyLightsStore = (state: any = [], {type, payload}) => {
    let index: number;
    switch (type) {
        case 'ADD_ITEMS':
            return payload;
        default:
            return state;
    }
};

@Injectable()
export class LightsService{

    lightsUrl: string = 'localhost:8080/lights';

    myLights: Observable<Array<ILights>>;

    constructor(private http : Http, private store: Store<AppStore>) {
        this.myLights = store.select<Array<ILights>>('MyLightsStore'); //something smells wrong here...
    }

    loadLights() {
        return this.http.get(this.lightsUrl)
            .map(this.extractData)
            .map(payload => ({type: 'ADD_ITEMS', payload}))
            .subscribe(action => this.store.dispatch(action));
            //.catch(this.handleError);
    }

    // getLights(): Observable<ILights[]> {
    //     return this.http.get(this.lightsUrl)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }
    //
    // addLight (light: ILights): Observable<ILights> {
    //     let body = JSON.stringify(light);
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //
    //     return this.http.put(this.lightsUrl, body, options)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }
    //
    // updateLight (light: ILights): Observable<ILights> {
    //     let body = JSON.stringify(light);
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //
    //     return this.http.post(this.lightsUrl, body, options)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }

    deleteLight (light: ILights)//: Observable<ILights>
    {
        // let body = JSON.stringify(light);
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        //
        // return this.http.delete(this.lightsUrl+'/'+light.luminaireTypeId, options)
        //     .map(this.extractData)
        //     .catch(this.handleError);
        this.store.dispatch({ type: 'DELETE_ITEM', payload: light });
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}

