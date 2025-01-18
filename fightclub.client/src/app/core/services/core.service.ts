import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '../models/base.response';

@Injectable({
  providedIn: 'root'
})
export class Core {
  constructor(private http: HttpClient) {}

  async get<T>(url: string) {
    const request = this.http.get<BaseResponse<T>>(url);
    return await firstValueFrom(request);
  }

  async post<T>(url: string, body: any) {
    const request = this.http.post<BaseResponse<T>>(url, body);
    return await firstValueFrom(request);
  }

  delay(ms: number): Promise<void> {
    return Core.delay(ms);
  }

  static delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
