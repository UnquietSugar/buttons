import "../styles/index.css";

import { useEffect, useMemo, useRef, useState } from "react";

import type { FC } from "react";
import { InteractiveButton } from "./InteractiveButton";

type Position = 1 | 2 | 3;

type Props = {
  positionProps: { row: Position; col: Position }[];
};

const rowClasses: Record<Position, string> = {
  1: "row-start-1",
  2: "row-start-2",
  3: "row-start-3",
};

const colClasses: Record<Position, string> = {
  1: "col-start-1",
  2: "col-start-2",
  3: "col-start-3",
};

export const GridView: FC<Props> = ({ positionProps }) => {
  const timersRef = useRef<number | undefined>(undefined);
  const intervalRef = useRef<number | undefined>(undefined);

  const [pressedButtons, setPressedButtons] = useState<number[]>([]);

  const clearButtons = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const intervalId = setInterval(() => {
      setPressedButtons((prev) => {
        if (prev.length === 0) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }

          return prev;
        }

        return prev.slice(0, -1);
      });
    }, 500);

    intervalRef.current = intervalId;
  };

  const setTimer = () => {
    if (timersRef.current) {
      clearTimeout(timersRef.current);
    }

    const timerId = setTimeout(clearButtons, 1000);

    timersRef.current = timerId;
  };

  const uniquePositions = useMemo(
    () =>
      positionProps.reduce<Props["positionProps"]>((acc, curr) => {
        if (acc.find(({ row, col }) => curr.col === col && curr.row === row)) {
          return acc;
        }

        return [...acc, curr];
      }, []),
    [positionProps]
  );

  useEffect(
    () => () => {
      clearInterval(intervalRef.current);
      clearTimeout(timersRef.current);
    },
    []
  );

  return (
    <div className="grid-container">
      {uniquePositions.map(({ row, col }, index) => (
        <div
          key={`${row}.${col}`}
          className={`${rowClasses[row]} ${colClasses[col]}`}
        >
          <InteractiveButton
            onClick={() => {
              setTimer();
              setPressedButtons((prev) => [...prev, index]);
            }}
            isActive={pressedButtons.includes(index)}
          />
        </div>
      ))}
    </div>
  );
};
