import { BadInputError } from './bad-input-error';
import { AppError } from './app-error';
import { ErrorHandler } from '@angular/core';
import { NotFoundError } from './not-found-error';

export class AppErrorHandler implements ErrorHandler {
  handleError(error: AppError): void {
    alert('An uexpected error occurred !!!');
  }
}
