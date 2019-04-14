import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class GetListService {
  
  id : string;  
  header : any;  
  url = 'http://localhost:57719/api/Login/';  
  constructor(private http : HttpClient) {   
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  getAllEmployee(): Observable<Register[]> {  
    return this.http.get<Register[]>(this.url + '/GetPersonalDt');  
  } 
  setID(data:any) {
    this.id=data;
  }
  getData(){
    let temp = this.id;
    this.clearData();
    return temp;
  }
  clearData(){
    this.id = undefined;
  }
  getEmployeeById(employeeId: string): Observable<Register> {  
    return this.http.get<Register>(this.url + '/Edit/' + employeeId);  
  }
}
