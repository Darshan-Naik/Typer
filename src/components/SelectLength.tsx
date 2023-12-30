import React from "react";

interface SelectLengthProps {
  onSelect: (number: number) => void;
}

const SelectLength = ({ onSelect }: SelectLengthProps) => {
  return (
    <div className="flex gap-2 rounded-md items-center text-secondary text-sm">
      <p className="text-disabled">Words:</p>
      <p
        className="border border-primary py-1 px-5 rounded-lg cursor-pointer"
        onClick={() => onSelect(25)}
      >
        25
      </p>
      <p
        className="border border-primary py-1 px-5 rounded-lg cursor-pointer"
        onClick={() => onSelect(50)}
      >
        50
      </p>
      <p
        className="border border-primary py-1 px-5 rounded-lg cursor-pointer"
        onClick={() => onSelect(75)}
      >
        75
      </p>
      <p
        className="border border-primary py-1 px-5 rounded-lg cursor-pointer"
        onClick={() => onSelect(100)}
      >
        100
      </p>
      <p
        className="border border-primary py-1 px-5 rounded-lg cursor-pointer"
        onClick={() => onSelect(150)}
      >
        150
      </p>
    </div>
  );
};

export default SelectLength;
