import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { IMobileConfig } from './mobileConfig.interface';

@Injectable()
export class MobileConfigService{
    constructor(private http : Http){}

    mobileUrl: string = 'localhost:8080/mobileConfigs';

    getMobileConfigs(): Observable<IMobileConfig[]> {
        return this.http.get(this.mobileUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addMobileConfig (mobile: IMobileConfig): Observable<IMobileConfig> {
        let body = JSON.stringify(mobile);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.mobileUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateMobileConfig (mobile: IMobileConfig): Observable<IMobileConfig> {
        let body = JSON.stringify(mobile);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.mobileUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteMobileConfig (mobile: IMobileConfig): Observable<IMobileConfig> {
        let body = JSON.stringify(mobile);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(this.mobileUrl+'/'+mobile.mobileConfigID, options)
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