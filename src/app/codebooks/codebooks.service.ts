import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { ICodebooks } from './codebooks.interface';

@Injectable()
export class CodebooksService{
    constructor(private http : Http){}

    codeBooksUrl: string = 'localhost:8080/codeBooks';

    getCodebooks(): Observable<ICodebooks[]> {
        return this.http.get(this.codeBooksUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addCodebook (codebook: ICodebooks): Observable<ICodebooks> {
        let body = JSON.stringify(codebook);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.codeBooksUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateCodebook (codebook: ICodebooks): Observable<ICodebooks> {
        let body = JSON.stringify(codebook);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.codeBooksUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteCodebook (codebook: ICodebooks): Observable<ICodebooks> {
        let body = JSON.stringify(codebook);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(this.codeBooksUrl+'/'+codebook.codeBookId, options)
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