import { CloneUtils } from '../utils/clone.utils';

export interface CategoryDto {
  id: string;
  name: string;
}

export class Category {
  public id: number | null = null;
  public name: string = '';

  public constructor(src: CategoryDto | null) {
    if (src) {
      this.id = CloneUtils.defaultNumber(src.id);
      this.name = CloneUtils.defaultString(src.name);
    }
  }
}
