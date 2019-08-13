import { AppError } from './../common/errors/app-error';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotFoundError } from '../common/errors/not-found-error';
import { BadInputError } from '../common/errors/bad-input-error';


export class DataService {
  private client: HttpClient;
  constructor(private urlPath: string, client: HttpClient) {
    this.client = client;
  }

  get(): Observable<any> {
    return this.client.get(this.urlPath)
      .pipe(
        catchError(this.handleError)
      );
  }

  create(resource: HTMLInputElement): Observable<any> {
    return this.client.post(this.urlPath, resource.value)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource: any): Observable<any> {
    resource.title = 'Updated !';
    return this.client.put(this.urlPath + '/' + resource.id, resource)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(resource: any): Observable<any> {
    return  this.client.delete(this.urlPath + '/' + resource.id)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    }
    if (error.status === 400) {
      return throwError(new BadInputError(error));
    }
    return throwError(new AppError(error));
  }
}
