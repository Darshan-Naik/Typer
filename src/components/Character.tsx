import React from "react";
import { twMerge } from "tailwind-merge";

interface CharacterProps {
  originalCharacter: string;
  typedCharacter?: string;
}

const Character = ({ originalCharacter, typedCharacter }: CharacterProps) => {
  return (
    <span
      className={twMerge(
        "",
        typedCharacter &&
          originalCharacter === typedCharacter &&
          "text-success",
        typedCharacter && originalCharacter !== typedCharacter && "text-error"
      )}
    >
      {originalCharacter}
    </span>
  );
};

export default Character;
