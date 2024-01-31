export function fixCapitalisation(word: string) {
  const firstLetter = word.slice(0, 1);
  const restOfString = word.slice(1);
  return `${firstLetter.toUpperCase()}${restOfString.toLowerCase()}`;
}
