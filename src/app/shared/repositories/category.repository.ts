import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Category, CategoryDto } from '../models/category.model';
import { GenericObject, isArray } from '../utils/types.utils';

@Injectable()
export class CategoryRepository {
  private readonly _CATEGORIES_URL: string = environment.categoryUrl;

  public constructor(
    private _httpClient: HttpClient
  ) { }

  public getCategories(): Observable<Category[]> {
    return this._httpClient.get<GenericObject<CategoryDto[]>>(this._CATEGORIES_URL).pipe(
      map((value: GenericObject<CategoryDto[]>) => {
        if (value && isArray(value['trivia_categories'])) {
          return value['trivia_categories'].map((categorie: CategoryDto) => new Category(categorie));
        }

        return [];
      })
    );
  }
}
