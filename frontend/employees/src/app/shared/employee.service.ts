import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  list : Employee[];
  readonly rootURL: 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-type': 'application/json',
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  "Access-Control-Allow-Headers": "*"}
  );

  constructor(private http: HttpClient) { }

  postEmployee(formData: Employee){
    return this.http.post('http://localhost:8000/employees/', formData, {headers: this.httpHeaders});
  }

  putEmployee(formData: Employee){
    return this.http.put('http://localhost:8000/employees/' + formData.employee_id + '/', formData, {headers: this.httpHeaders});
  }

  deleteEmployee(id : number){
    return this.http.delete('http://localhost:8000/employees/' + id, {headers: this.httpHeaders});
  }

  refreshList(){
    this.http.get('http://localhost:8000/employees/', {headers: this.httpHeaders})
    .toPromise().then(res => this.list = res as Employee[])
  }
}
