import "./index.css";
import { InteractiveButton } from "./InteractiveButton";

export const GridView = () => {
  return (
    <div className="grid-container">
      <div className="firs-row-item">
        <InteractiveButton />
      </div>
      <div className="firs-row-item">
        <InteractiveButton />
      </div>
      <div className="firs-row-item">
        <InteractiveButton />
      </div>
      <div className="second-row-item col-start-3">
        <InteractiveButton />
      </div>
      <div className="third-row-item">
        <InteractiveButton />
      </div>
      <div className="second-row-item">
        <InteractiveButton />
      </div>
      <div className="second-row-item">
        <InteractiveButton />
      </div>
    </div>
  );
};
