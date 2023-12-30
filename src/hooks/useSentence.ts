import { useEffect, useMemo, useState } from "react";
import { generateWord, isValidLetter } from "@/utils";

const useSentence = () => {
  const [sentence, setSentence] = useState<string>("");
  const sentenceCharacters = useMemo(() => sentence.split(""), [sentence]);
  const resetSentence = (number: number = 50) => {
    const words = generateWord(number);
    setSentence(words);
  };

  useEffect(() => {
    const words = generateWord(50);
    setSentence(words);
  }, []);

  return {
    sentenceCharacters,
    resetSentence,
  };
};

export default useSentence;
