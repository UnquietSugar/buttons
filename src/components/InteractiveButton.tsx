import "../styles/index.css";

import type { FC } from "react";

type Props = {
  onClick: () => void;
  isActive: boolean;
};

export const InteractiveButton: FC<Props> = ({ onClick, isActive }) => (
  <button
    className={`button-container ${isActive ? "active" : ""}`}
    onClick={onClick}
  />
);
