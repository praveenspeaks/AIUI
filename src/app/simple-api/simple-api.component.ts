import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-api',
  templateUrl: './simple-api.component.html',
  styleUrls: ['./simple-api.component.css']
})
export class SimpleApiComponent {
  inputText: string = '';

  constructor(private http: HttpClient) {}

  callApi() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    this.http.post(apiUrl, { data: this.inputText }).subscribe(response => {
      console.log(response);
    });
  }
}
