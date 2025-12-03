import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RestClientService {
  private readonly baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  private fullUrl(endpoint: string): string {
    return `${this.baseUrl}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
  }

  get<Dao>(url: string, params?: Record<string, string | number>): Observable<Dao> {
    const options = { params: new HttpParams({ fromObject: params ?? {} }) };
    return this.http.get<Dao>(this.fullUrl(url), options);
  }

  post<Dao>(url: string, body: any): Observable<Dao> {
    return this.http.post<Dao>(this.fullUrl(url), body);
  }

  put<Dao>(url: string, body: any): Observable<Dao> {
    return this.http.put<Dao>(this.fullUrl(url), body);
  }

  delete<Dao>(url: string): Observable<Dao> {
    return this.http.delete<Dao>(this.fullUrl(url));
  }

  patch<Dao>(url: string, body: any): Observable<Dao> {
    return this.http.patch<Dao>(this.fullUrl(url), body);
  }
}
