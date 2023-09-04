import { nanoid } from "nanoid";
import create from "zustand";

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
  texture: "diamond",
  cubes: getLocalStorage("cubes") || [],
  addCube: (x, y, z) => {
    set((state) => ({
      cubes: [
        ...state.cubes,
        {
          id: nanoid(),
          pos: [x, y, z],
          texture: state.texture,
        },
      ],
    }));
  },
  removeCube: (id) => {
    set((state) => ({
      cubes: state.cubes.filter((cube) => cube.id !== id),
    }));
  },
  setTexture: (texture) => {
    set(() => ({ texture }));
  },
  saveWorld: () => {
    setLocalStorage("cubes", useStore.getState().cubes);
  },
  resetWorld: () => {
    set(() => ({ cubes: [] }));
    setLocalStorage("cubes", []);
  },
}));
