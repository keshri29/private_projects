import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Userdetail } from './userdetail.model'; 

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url : string = environment.baseUrl + '/RegistrationForm'
  
  constructor(private http: HttpClient) {}

  list:Userdetail[] = [];
  formData: Userdetail = new Userdetail();
  

  getUserList(): Observable<any> {
    return this.http.get(this.url).pipe(
      map((response) => {
        return response;
      })
    );
  }

  addUser(data: any): Observable<any> {
    return this.http.post(this.url, data).pipe(
      catchError((error) => {
        console.error('Error adding User:', error);
        return throwError(() => new Error('Error adding User'));
      })
    );
  }
  
  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(this.url + '/' + id, data).pipe(
      catchError((error) => {
        console.error('Error updating User:', error);
        return throwError(() => new Error('Error updating User'));
      })
    );
  }
  
  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.url+ '/' + id).pipe(
      catchError((error) => {
        console.error('Error deleting candidate:', error);
        return throwError(() => new Error('Error deleting User'));
      })
    );
  }

  isPhoneExists(phone: string): Observable<boolean> {
    return this.http.get<boolean>(`/https://localhost:7243/api/RegistrationForm/checkPhoneNumber/${phone}`);
  }

  isEmailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(`https://localhost:7243/api/RegistrationForm/checkEmail/${email}`);
  }

}
 