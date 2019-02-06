import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Element} from '../model/element.model'
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {
  url = 'https://my-json-server.typicode.com/f4bb1o/json-server/';
  netsens_url = "http://live.netsens.it/export/xml_export_1A.php?username=gtech&password=gtechacea!&station_id=8";
  constructor(private http: HttpClient) { }

  getElementsFromServices(query : string): Observable<Element[]> {
    return this.http.get<Element[]>(this.url + `/element?q=${query}`);
  }

  getElements(query : string): Observable<Element[]> {
    return this.http.get<Element[]>(this.url + `/element?name=${query}`);
  }

  getArea(query : string): Observable<Element[]> {
    return this.http.get<Element[]>(this.url + `/element?area=${query}`);
  }

  getNetsens() {
    var enddate = new Date();
    var startdate = new Date(enddate);

    var durationInMinutes = 10;
    
    startdate.setMinutes(enddate.getMinutes() - durationInMinutes);
    var end = (enddate.getFullYear() + '-' + ("0" + (enddate.getMonth() + 1)).slice(-2) + '-' + ("0" + enddate.getDate()).slice(-2) + ' ' +("0" + enddate.getHours()).slice(-2) + ':' + ("0" + enddate.getMinutes()).slice(-2)+ ':' + ("0" + enddate.getSeconds()).slice(-2));
    var start = (startdate.getFullYear() + '-' + ("0" + (startdate.getMonth() + 1)).slice(-2)  + '-' + ("0" + startdate.getDate()).slice(-2) + ' ' +("0" + startdate.getHours()).slice(-2) + ':' + ("0" + (startdate.getMinutes())).slice(-2) + ':' + ("0" + startdate.getSeconds()).slice(-2));
    //console.log(this.netsens_url+`/start_date=${start}&end_date=${end}`);
    return this.http.get(this.netsens_url+`&start_date=${start}&end_date=${end}`, { responseType: 'text' });
  }
}
