
export function shuffle<T>(array: T[]): void {
  array.sort(() => Math.random() - 0.5);
}
