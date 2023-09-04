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
    <div className="menu">
      <button className="button" onClick={() => saveWorld()}>
        Save
      </button>
      <button className="button" onClick={() => resetWorld()}>
        Reset
      </button>
      <div className="instructions">
        <h2>Instructions</h2>
        <h3>Move</h3>
        <span>W to move up </span>
        <span>S to move down</span>
        <span>A to move left</span>
        <span>D to move right</span>
        <h3>Action</h3>
        <span>Space to jump</span>
        <span>Click to add cube</span>
        <span>Alt + click to remove</span>
        <span>1-9 to change texture</span>
      </div>
    </div>
  );
};
