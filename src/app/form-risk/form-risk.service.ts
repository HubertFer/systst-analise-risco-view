import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};
const url = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})

export class FormRiskService {

  constructor(private http: HttpClient) { }

  createData(body:any){
    this.http.post(url + 'rest/veiculo/', JSON.parse(body), httpOptions)
    .subscribe(
    res => {
        console.log(res)
    }
    );
console.log(body)
  }

}

