"use client";
import React, { Fragment } from "react";
import Character from "./Character";
import Curser from "./Curser";
import useFocus from "@/hooks/useFocus";
import { twMerge } from "tailwind-merge";

interface TypingBoxProps {
  sentenceCharacters: string[];
  typedSentenceCharacters: string[];
  typedSentence: string;
  onType: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TypingBox = ({
  sentenceCharacters,
  typedSentenceCharacters,
  typedSentence,
  onType,
}: TypingBoxProps) => {
  const { inputRef, inFocus, setFocus } = useFocus();
  return (
    <div
      className="border border-primary px-12 pb-20 rounded-lg backdrop-blur-lg min-h-80"
      onClick={setFocus}
    >
      <p className="text-center pt-4 pb-20 text-xs text-disabled underline underline-offset-4">
        (Click/Focus) to start typing
      </p>
      <label
        htmlFor="key-input"
        className={twMerge("text-lg text-primary", !inFocus && "text-disabled")}
      >
        {!typedSentenceCharacters.length && inFocus && <Curser />}
        {sentenceCharacters.map((character, index) => (
          <Fragment key={index}>
            <Character
              originalCharacter={character}
              typedCharacter={typedSentenceCharacters[index]}
            />
            {index === typedSentenceCharacters.length - 1 && inFocus && (
              <Curser />
            )}
          </Fragment>
        ))}
        <input
          type="text"
          ref={inputRef}
          value={typedSentence}
          autoComplete="off"
          autoCorrect="off"
          id="key-input"
          className="opacity-0"
          onChange={onType}
        />
      </label>
    </div>
  );
};

export default TypingBox;
