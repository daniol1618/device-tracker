import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../models/device';
import { Status } from '../models/status';

export interface DashboardResponse {
  devices: Device[];
  statuses: Status[];
}

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private readonly API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<DashboardResponse> {
    return this.http.get<DashboardResponse>(`${this.API_URL}/dashboard`);
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.API_URL}/devices`);
  }

  getStatuses(): Observable<Status[]> {
    return this.http.get<Status[]>(`${this.API_URL}/statuses`);
  }
}
