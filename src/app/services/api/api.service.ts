import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiQueryResponse } from 'src/app/interfaces/shared.interface';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  get<T = any>(path: string, params = {}) {
    return this.http.get<ApiQueryResponse<T>>(`${this.apiBaseUrl}/${path}`, {
      params,
    });
  }
  post<T = any>(path: string, body: any, params = {}) {
    return this.http.post<ApiQueryResponse<T>>(
      `${this.apiBaseUrl}/${path}`,
      body,
      {
        params,
      }
    );
  }
  put<T = any>(path: string, body: any, params = {}) {
    return this.http.put<ApiQueryResponse<T>>(
      `${this.apiBaseUrl}/${path}`,
      body,
      {
        params,
      }
    );
  }
  delete<T = any>(path: string, params = {}) {
    return this.http.delete<ApiQueryResponse<T>>(`${this.apiBaseUrl}/${path}`, {
      params,
    });
  }
}
