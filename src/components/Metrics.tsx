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
        Time : <span className="text-secondary">{time}</span>
      </p>
      <p>
        Speed :
        <span className="text-secondary">
          {cpm}/cpm, {wpm}/wpm
        </span>
      </p>

      <p>
        Accuracy : <span className="text-success">{accuracy}% </span>
      </p>
      <p>
        Error Rate :<span className="text-error"> {errorRate}%</span>
      </p>
    </div>
  );
};

export default Metrics;
