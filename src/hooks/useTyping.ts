/* eslint-disable react-hooks/exhaustive-deps */
import { calculateAccuracy } from "@/utils";
import { use, useEffect, useMemo, useState } from "react";

interface useTypingProps {
  sentenceCharacters: string[];
  startTimer: () => void;
  stopTimer: () => void;
  mileSeconds: number;
  seconds: number;
}

const useTyping = ({
  sentenceCharacters,
  startTimer,
  stopTimer,
  mileSeconds,
  seconds,
}: useTypingProps) => {
  const [typedSentence, setTypedSentence] = useState<string>("");
  const [cpm, setCpm] = useState<number>(0);
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<string>("0.00");
  const [errorRate, setErrorRate] = useState<string>("0.00");
  const typedSentenceCharacters = useMemo(
    () => typedSentence.split(""),
    [typedSentence]
  );
  const resetTyping = () => {
    setTypedSentence("");
    setCpm(0);
    setWpm(0);
  };
  const onType = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value.length === 1 && startTimer();
    if (
      typedSentenceCharacters.length < sentenceCharacters.length &&
      typedSentenceCharacters.length + 1 === e.target.value.length
    ) {
      setTypedSentence(e.target.value);
    }
  };
  useEffect(() => {
    if (typedSentenceCharacters.length >= sentenceCharacters.length) {
      stopTimer();
    }
    const acc = calculateAccuracy(typedSentenceCharacters, sentenceCharacters);
    const err = acc === 0 ? 0 : 100 - acc;
    setAccuracy(acc.toFixed(2));
    setErrorRate(err.toFixed(2));
  }, [typedSentenceCharacters.length, sentenceCharacters.length]);

  useEffect(() => {
    if (mileSeconds > 0) {
      const seconds = mileSeconds / 1000;
      setCpm(Math.round((typedSentenceCharacters.length / seconds) * 60));
      setWpm(
        Math.round(
          (typedSentence.split(" ").filter(Boolean).length / seconds) * 60
        )
      );
    }
  }, [seconds]);
  return {
    typedSentenceCharacters,
    onType,
    typedSentence,
    resetTyping,
    cpm,
    wpm,
    accuracy,
    errorRate,
  };
};

export default useTyping;
