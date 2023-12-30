import React from "react";

interface MetricsProps {
  time: string;
  cpm: number;
  wpm: number;
  accuracy: string;
  errorRate: string;
}

const Metrics = ({ time, cpm, wpm, accuracy, errorRate }: MetricsProps) => {
  return (
    <div className="flex gap-4 text-disabled text-sm">
      <p>
        <span>Time : </span> <span className="text-secondary">{time}</span>
      </p>
      <p>
        <span> Speed : </span>
        <span className="text-secondary truncate">
          {cpm}/cpm, {wpm}/wpm
        </span>
      </p>
      <p>
        <span> Accuracy : </span>
        <span className="text-success">{accuracy}% </span>
      </p>
      <p>
        <span> Error Rate : </span>
        <span className="text-error"> {errorRate}%</span>
      </p>
    </div>
  );
};

export default Metrics;
