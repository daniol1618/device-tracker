import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  imports: [    
    CommonModule,
    MatCardModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  devices: any[] = [];
  statusMap = new Map<number, string>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/dashboard')
      .subscribe(data => {
        this.devices = data.devices;
        data.statuses.forEach((s: any) =>
          this.statusMap.set(s.id, s.name)
        );
      });
  }

  getStatusName(statusId: number): string {
    console.log(this.statusMap);
    return this.statusMap.get(statusId) ?? 'Unknown';
  }
}
