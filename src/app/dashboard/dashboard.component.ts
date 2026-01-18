import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { DeviceService } from '../services/device.service';
import { Device } from '../models/device';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  devices: Device[] = [];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.deviceService.getDashboardData()
      .subscribe({
        next: data => this.devices = data.devices,
        error: err => console.error('Failed to load dashboard data', err)
      });
  }
}
