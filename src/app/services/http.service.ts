import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService
{
	constructor(
        private _http: Http,
        private _router: Router,
    ) {};


    /**
     * GET Request
     */
    get(url: string): Promise<any> {

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'bearer ' + localStorage.getItem('token')
        });
        
        let options = new RequestOptions({ headers: headers });
        
        /* send request*/
        return this._http.get(url, options)
        	.toPromise()
        	.then(
        		res => this.handleSuccess(res),
        		error => this.handleError(error)
        	);            
    }

    /**
     * POST Request
     */
    post(url: string, params): Promise<any[]> {

  		let headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
        });
        /*'Authorization' : 'bearer ' + localStorage.getItem('token'),*/

        let options = new RequestOptions({ headers: headers });

        /* send request*/
        return this._http.post(url, JSON.stringify(params), options)
            .toPromise()
            .then(
                res => this.handleSuccess(res),
                error => this.handleError(error)
            );
    }

    /**
     * PUT Request
     */
    put(url: string, params): Promise<any[]> {

  		let headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
        });
        /*'Authorization' : 'bearer ' + localStorage.getItem('token'),*/

        let options = new RequestOptions({ headers: headers });

        /* send request*/
        return this._http.put(url, JSON.stringify(params), options)
            .toPromise()
            .then(
                res => this.handleSuccess(res),
                error => this.handleError(error)
            );
    }

    /**
     * DELETE Request
     */
    delete(url: string): Promise<any[]> {

  		let headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
        });
        /*'Authorization' : 'bearer ' + localStorage.getItem('token'),*/

        let options = new RequestOptions({ headers: headers });

        /* send request*/
        return this._http.delete(url, options)
            .toPromise()
            .then(
                res => this.handleSuccess(res),
                error => this.handleError(error)
            );
    }

    /**
     * Handle Success Response
     */
	private handleSuccess(res: Response) {
        let body = res.json();

        return body || {} ;
    }

    /**
     * Handle Error Response
     */
    private handleError(error: Response) {
        let body = error.json();

        return Promise.reject(body || 'An internal error occured.');
    }
}