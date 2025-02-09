import React, { useState, useEffect } from "react";
import cn from "classnames";

// eslint-disable-next-line import/extensions
import wallImageUrl from "@assets/images/wall.jpg";
import "./vignette.scss";
import { createBlock } from "@utils";

const block = createBlock("vignette");

const Vignette = ({ onLoadEnd }: { onLoadEnd: () => any }) => {
  const [isLoadStart, setIsLoadStart] = useState(false);

  useEffect(() => {
    const wallImage = new Image();
    wallImage.addEventListener("load", () => {
      setIsLoadStart(true);
    });
    wallImage.src = wallImageUrl;
  }, []);

  return (
    <div
      className={cn(block.block(), block.modifyBlock({ loading: isLoadStart }))}
      onTransitionEnd={onLoadEnd}
    />
  );
};

export const MemoizedVignette = React.memo(Vignette);
