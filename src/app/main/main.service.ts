import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainComponent } from './main.component'

const httpOptions = {

    headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};
const url = 'http://localhost:8080/';
@Injectable({
    providedIn: 'root'
})

export class MainService {
    
    constructor(private http: HttpClient) { }

    delete(id: string): Observable<any> {
        return this.http.request('DELETE',url+'rest/veiculo/' + id, httpOptions)
    }

    Update(body: any){
        return this.http.put(url + 'rest/veiculo/'+body.id, JSON.parse(JSON.stringify(body)), httpOptions)
    }

    getData(): Observable <any> {
        return this.http.get( url + 'rest/veiculo', httpOptions)
    }

}