import { useEffect, useState } from "react";

const ACTIONS_KEYBOARD_MAP = {
  KeyW: "moveForward",
  KeyS: "moveBackward",
  KeyA: "moveLeft",
  KeyD: "moveRight",
  Space: "jump",
  Digit1: "diamond",
  Digit2: "dirt",
  Digit3: "glass",
  Digit4: "gold",
  Digit5: "grass",
  Digit6: "log",
  Digit7: "steel",
  Digit8: "stone",
  Digit9: "wood",
};

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    stone: false,
    log: false,
    gold: false,
    diamond: false,
    steel: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { code } = e;
      const action = ACTIONS_KEYBOARD_MAP[code];
      if (action) {
        setActions((prevAction) => ({
          ...prevAction,
          [action]: true,
        }));
      }
    };

    const handleKeyUp = (e) => {
      const { code } = e;
      const action = ACTIONS_KEYBOARD_MAP[code];
      if (action) {
        setActions((prevAction) => ({
          ...prevAction,
          [action]: false,
        }));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [actions]); // Dependencia añadida para reaccionar a cambios en 'action'

  return actions;
};
