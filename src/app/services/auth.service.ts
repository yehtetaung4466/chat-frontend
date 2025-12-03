// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ApiResponse } from '../common/interfaces/apiResponse';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessTokenKey = 'access_token';
  private refreshTokenKey = 'refresh_token';

  constructor(private http: HttpClient) {}

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  setTokens(access: string, refresh: string) {
    localStorage.setItem(this.accessTokenKey, access);
    localStorage.setItem(this.refreshTokenKey, refresh);
  }

  logout() {
    localStorage.clear();
  }

  refreshToken() {
    return this.http.post<any>('/auth/refresh', {
      refreshToken: this.getRefreshToken()
    }).pipe(
      tap((tokens) => {
        this.setTokens(tokens.accessToken, tokens.refreshToken);
      })
    );
  }


  signIn(username: string, password: string) {
    return this.http.post<ApiResponse<authResponse>>('http://localhost:8080/auth/signup', { username, password }).pipe(
      tap((res) => {
        this.setTokens(res.data.accessToken, res.data.refreshToken);
      })
    );
}

login(username:string,password:string) {

  return this.http.post<ApiResponse<authResponse>>('http://localhost:8080/auth/login', { username, password }).pipe(
      tap((res) => {
        this.setTokens(res.data.accessToken, res.data.refreshToken);
      })
    );
  
}
}

interface authResponse {
  accessToken: string;
  refreshToken: string;
}