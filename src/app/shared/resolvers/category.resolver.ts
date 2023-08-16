import { ResolveFn } from '@angular/router';
import { Category } from '../models/category.model';
import { inject } from '@angular/core';
import { CategoryRepository } from '../repositories/category.repository';
import { HttpErrorResponse } from '@angular/common/http';

export const categoryResolver: ResolveFn<Category[] | HttpErrorResponse> = () => {
  return inject(CategoryRepository).getCategories();
};
