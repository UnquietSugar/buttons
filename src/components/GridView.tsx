import "../styles/index.css";
import type { FC } from "react";
import { useMemo } from "react";
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
  const uniquePositions = useMemo(
    () =>
      positionProps.reduce<Props["positionProps"]>((acc, curr) => {
        if (acc?.find(({ row, col }) => curr.col === col && curr.row === row)) {
          return acc;
        }

        return [...acc, curr];
      }, []),
    [positionProps]
  );

  return (
    <div className="grid-container">
      {uniquePositions.map(({ row, col }) => (
        <div
          key={`${row}.${col}`}
          className={`${rowClasses[row]} ${colClasses[col]}`}
        >
          <InteractiveButton />
        </div>
      ))}
    </div>
  );
};
