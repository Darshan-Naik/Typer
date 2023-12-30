import { faker } from "@faker-js/faker";

export const generateWord = (n: number): string => {
  return faker.word.words(n);
};

export const isValidLetter = (letter: string): boolean => {
  // must be single character and alphanumeric or space
  return letter.length === 1 && /^[0-9a-zA-Z\s]+$/.test(letter);
};
export const __SERVER__ = typeof window === "undefined";

export const calculateAccuracy = (
  typedSentenceCharacters: string[],
  sentenceCharacters: string[]
) => {
  const correctCharacters = typedSentenceCharacters.filter(
    (character, index) => character === sentenceCharacters[index]
  );
  return (correctCharacters.length / typedSentenceCharacters.length) * 100 || 0;
};
