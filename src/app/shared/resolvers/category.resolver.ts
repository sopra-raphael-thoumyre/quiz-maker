import { ResolveFn } from '@angular/router';
import { Category } from '../models/category.model';
import { inject } from '@angular/core';
import { CategoryRepository } from '../repositories/category.repository';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';
import { HttpErrorResponse } from '@angular/common/http';

export const categoryResolver: ResolveFn<Category[]> = () => {
  return inject(CategoryRepository)
    .getCategories()
    .pipe(catchError((errorResponse: HttpErrorResponse) => {
      console.log(errorResponse);

      return of([]);
    }));
};
