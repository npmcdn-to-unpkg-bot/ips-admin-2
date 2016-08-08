import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { IAPIKeys } from './apiKeys.interface';

@Injectable()
export class APIKeysService{
    constructor(private http : Http){}

    apiKeysUrl: string = 'localhost:8080/apiKeys';

    getApiKeys(): Observable<IAPIKeys[]> {
        return this.http.get(this.apiKeysUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addApiKey (key: IAPIKeys): Observable<IAPIKeys> {
        let body = JSON.stringify(key);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.apiKeysUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateApiKey (key: IAPIKeys): Observable<IAPIKeys> {
        let body = JSON.stringify(key);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiKeysUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteApiKey (key: IAPIKeys): Observable<IAPIKeys> {
        let body = JSON.stringify(key);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(this.apiKeysUrl+'/'+key.apiKeyID, options)
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