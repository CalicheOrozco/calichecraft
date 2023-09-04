import { useBox } from "@react-three/cannon/dist";
import * as textures from "../Images/textures";
import { useState } from "react";
import { useStore } from "../hooks/useStore";

export function Cube({ id, position, texture }) {
  const [isHover, setIshover] = useState(false);
  const [removeCube] = useStore((state) => [state.removeCube]);
  const [addCube] = useStore((state) => [state.addCube]);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const activeTexture = textures[texture + "Texture"];

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIshover(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIshover(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        if (e.altKey) {
          removeCube(id);
          return;
        } else if (clickedFace === 0) {
          addCube(x + 1, y, z);
          return;
        } else if (clickedFace === 1) {
          addCube(x - 1, y, z);
          return;
        } else if (clickedFace === 2) {
          addCube(x, y + 1, z);
          return;
        } else if (clickedFace === 3) {
          addCube(x, y - 1, z);
          return;
        } else if (clickedFace === 4) {
          addCube(x, y, z + 1);
          return;
        } else if (clickedFace === 5) {
          addCube(x, y, z - 1);
          return;
        }
      }}
      ref={ref}
      position={position}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        map={activeTexture}
        attach="material"
        color={isHover ? "grey" : "white"}
        transparent
        opacity={texture === "glass" ? 0.6 : 1}
      />
    </mesh>
  );
}
