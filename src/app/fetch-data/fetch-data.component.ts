import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.scss'],
  imports: [CommonModule],
})
export class FetchDataComponent implements OnInit {
  data: any[] = [];
  loading = false;
  error = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.apiService.fetchData().subscribe({
      next: (response) => {
        this.data = response;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch data';
        this.loading = false;
      },
    });
  }
}
