import { CharacterTrait } from '../types/characterSheet';

export const addStats = (statArray: number[]): number =>
  statArray.reduce((lastResult, currentValue) => lastResult + currentValue, 0);

export function getBonusPoints(data: CharacterTrait[]) {
  const stats = data.map((item) => item.amount);
  const total = addStats(stats);
  const part = total / 10;
  const result = Math.ceil(part);
  return result;
}
