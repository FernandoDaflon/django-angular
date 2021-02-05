import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  token = 'Token d538ec7d81c9333c64bded9bbcf91534b92dd1cb';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization', this.token);

  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<any> {
    return this.http.get(this.baseUrl + 'members/',
    {headers: this.httpHeaders});
  }

  getMember(id): Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  }

  saveNewMember(member) : Observable<any> {
    return this.http.post(this.baseUrl + 'members/', member,
    {headers: this.httpHeaders});
}
}
