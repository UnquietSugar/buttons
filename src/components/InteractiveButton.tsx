import "../styles/index.css";
import { useEffect, useState } from "react";

export const InteractiveButton = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const timeout = setTimeout(() => {
      setIsActive(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isActive]);

  return (
    <button
      className={`button-container ${isActive ? "active" : ""}`}
      onClick={() => setIsActive(true)}
    />
  );
};
