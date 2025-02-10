import React, { useState, useEffect } from "react";
import cn from "classnames";
import { createBlock } from "../../utils";
// eslint-disable-next-line import/extensions
import bgFlowerImageUrl from "../../assets/images/background_image.jpg";
import { Unlocker } from "../unlocker";
import "./welcome-screen.scss";

const block = createBlock("welcome-screen");

const WelcomeScreen = ({ onOpen }: { onOpen: () => any }) => {
  const [opened, setOpened] = useState(false);
  const [isTransitionEnd, setIsTransitionEnd] = useState(false);
  const [isBgLoaded, setIsBgLoaded] = useState(false);

  useEffect(() => {
    const bgFlowerImage = new Image();
    bgFlowerImage.addEventListener("load", () => {
      setIsBgLoaded(true);
    });
    bgFlowerImage.src = bgFlowerImageUrl;
  }, []);

  useEffect(() => {
    if (isTransitionEnd && isBgLoaded) {
      onOpen();
    }
  }, [isBgLoaded, isTransitionEnd, onOpen]);

  return (
    <div
      className={cn(
        block.block(),
        block.modifyBlock({ opened: opened && isBgLoaded })
      )}
      onTransitionEnd={(e) => {
        if (e.target === e.currentTarget) {
          setIsTransitionEnd(true);
        }
      }}
    >
      <div className={block.element("header-wrapper")}>
        {/* Բացel հրավերiratomse */}
        <span data-heading="Открыть">Բացել</span>
        <span data-heading="приглашение">հրավերը</span>
      </div>
      <Unlocker setOpened={setOpened} />
    </div>
  );
};

export const MemoizedWelcomeScreen = React.memo(WelcomeScreen);
