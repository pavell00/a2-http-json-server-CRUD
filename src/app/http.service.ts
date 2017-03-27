import { Injectable } from '@angular/core';
import { Headers, Http, Response, 
         URLSearchParams, RequestOptions, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

import { Document} from './document'

@Injectable()
export class HttpService {

  private docmentsUrl = 'http://172.16.9.2:3004/documents';  // URL to web API
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}
  
  getDocs():Observable<Document[]> {
    return this.http
      .get(this.docmentsUrl)
      .map(response => <Document[]> response.json())
  }

  saveDoc(d: Document): Observable<Document[]>{

    return this.http.post(this.docmentsUrl, JSON.stringify(d), this.options)
        .map(response => response.json())
  }

  delDoc(id: string): Observable<Document[]>{
    return this.http.delete(`${this.docmentsUrl}/${id}`, this.options)
        .map(response => response.json())
  }

  updDoc(d: Document): Observable<Document[]>{
    let id = String(d.id);
    return this.http.put(`${this.docmentsUrl}/${id}`, JSON.stringify(d), this.options)
        .map(response => response.json())
  }
}
