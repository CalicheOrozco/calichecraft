import { useEffect, useState } from "react";
import * as images from "../Images/images";

import { useStore } from "../hooks/useStore.js";
import { useKeyboard } from "../hooks/useKeyboard";

export const TextureSelect = () => {
  const [texture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);
  const { dirt, grass, stone, log, gold, diamond, steel, glass, wood } =
    useKeyboard();

  useEffect(() => {
    const options = {
      dirt,
      grass,
      stone,
      log,
      gold,
      diamond,
      steel,
      glass,
      wood,
    };

    const selectedTexture = Object.entries(options).find(
      ([texture, isEnabled]) => isEnabled
    );

    if (selectedTexture) {
      const [textureName] = selectedTexture;
      setTexture(textureName);
    }
  }, [dirt, grass, stone, log, gold, diamond, steel, glass, wood]);

  return (
    <div className="texture-selector">
      {Object.entries(images).map(([imgKey, img]) => {
        return (
          <img
            className={texture === imgKey.replace("Img", "") ? "selected" : ""}
            key={imgKey}
            src={img}
            alt={imgKey}
          />
        );
      })}
    </div>
  );
};
