import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { ILights } from './lights.interface';
import {Store} from '@ngrx/store';

export interface AppStore {
    items: ILights[];
    counter: number;
}

//-------------------------------------------------------------------
// ITEMS STORE/REDUCER
//-------------------------------------------------------------------
export const MyLights = (state: any = [], {type, payload}) => {
    let index: number;
    switch (type) {
        default:
            return state;
    }
};

@Injectable()
export class LightsService{

    lightsUrl: string = 'localhost:8080/lights';

    lights: Observable<Array<ILights>>;

    constructor(private http : Http, private store: Store<AppStore>) {
        this.lights = store.select<Array<ILights>>('items'); // Bind an observable of our items to "ItemsService"
    }

    getLights(): Observable<ILights[]> {
        return this.http.get(this.lightsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addLight (light: ILights): Observable<ILights> {
        let body = JSON.stringify(light);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.lightsUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateLight (light: ILights): Observable<ILights> {
        let body = JSON.stringify(light);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.lightsUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteLight (light: ILights): Observable<ILights> {
        let body = JSON.stringify(light);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(this.lightsUrl+'/'+light.luminaireTypeId, options)
            .map(this.extractData)
            .catch(this.handleError);
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

