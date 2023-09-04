import { useEffect } from "react";
import { useStore } from "../hooks/useStore";

export const Menu = () => {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".instructions").style.display = "none";
    }, 15000);

    return () => {
      clearInterval();
    };
  }, []);

  return (
    <>
      <div className="menu">
        <button onClick={() => saveWorld()}>Save</button>
        <button onClick={() => resetWorld()}>Reset</button>
      </div>
      <div className="instructions">
        <h2>Instructions</h2>
        <span>W A S D to move</span>
        <span>Space to jump</span>
        <span>Click to add cube</span>
        <span>Alt + click to remove</span>
      </div>
    </>
  );
};
