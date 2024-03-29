"use client";

import useSentence from "@/hooks/useSentence";
import React from "react";
import useTyping from "@/hooks/useTyping";
import useTimer from "@/hooks/useTimer";
import Metrics from "./Metrics";
import TypingBox from "./TypingBox";
import SelectLength from "./SelectLength";

const MainTyping = () => {
  const {
    resetTimer,
    formattedTime,
    startTimer,
    stopTimer,
    mileSeconds,
    seconds,
  } = useTimer();
  const { sentenceCharacters, resetSentence } = useSentence();

  const {
    typedSentenceCharacters,
    onType,
    typedSentence,
    resetTyping,
    cpm,
    wpm,
    accuracy,
    errorRate,
  } = useTyping({
    sentenceCharacters,
    startTimer,
    stopTimer,
    mileSeconds,
    seconds,
  });

  const reset = (number?: number) => {
    resetSentence(number);
    resetTyping();
    resetTimer();
  };
  return (
    <div className="sm:flex p-12 flex-grow hidden flex-col justify-center gap-4 ">
      <div className="flex justify-between items-center flex-wrap gap-2 backdrop-blur-sm py-2 px-4 rounded-full border border-primary">
        <Metrics
          time={formattedTime}
          cpm={cpm}
          wpm={wpm}
          accuracy={accuracy}
          errorRate={errorRate}
        />
        <SelectLength onSelect={reset} />
      </div>

      <TypingBox
        sentenceCharacters={sentenceCharacters}
        typedSentenceCharacters={typedSentenceCharacters}
        typedSentence={typedSentence}
        onType={onType}
      />
      <div className="flex justify-end items-center">
        <button
          onClick={() => reset()}
          className="px-8 py-2 bg-secondary border border-primary rounded-md text-secondary"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default MainTyping;
