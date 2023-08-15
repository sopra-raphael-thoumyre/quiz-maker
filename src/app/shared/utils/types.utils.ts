
export type GenericObject<T> = { [key: string]: T };

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isArray<T>(value: unknown): value is Array<T> {
  return Array.isArray(value);
}
