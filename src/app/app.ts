import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.httpClient.get(environment.serverUrl + '/hello').subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
