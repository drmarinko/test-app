import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class PostService extends DataService {
  constructor(client: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', client);
  }
}
