import { isArray, isNumber, isString } from './types.utils';

export abstract class CloneUtils {

  public static json<T>(value: unknown): T {
    return JSON.parse(JSON.stringify(value));
  }

  public static defaultNumber(value: unknown): number | null {
    if (isNumber(value)) {
      return value;
    }

    if (isString(value)) {
      return Number(value);
    }

    return null;
  }

  public static defaultString(value: unknown): string {
    if (isString(value)) {
      return value;
    }

    if (isNumber(value)) {
      return value.toString();
    }

    return '';
  }

  public static defaultArray<T>(value: unknown): T[] {
    if (isArray(value)) {
      return value as T[];
    }

    return [];
  }
}
