import React, { useState, useCallback } from "react";
import { rectIntersection, DndContext, UniqueIdentifier } from "@dnd-kit/core";
import {
  restrictToHorizontalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import type { Transform } from "@dnd-kit/utilities";

import { DROPZONE_ID } from "./unlocker-constants";
import { DraggableOverlay, Droppable, DraggableItem } from "./components";
import { createBlock } from "../../utils";

import "./unlocker.scss";

const block = createBlock("unlocker");

const Unlocker = ({ setOpened }: { setOpened: (value: boolean) => any }) => {
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  const [shouldUpdate, setShouldUpdate] = useState(true);
  const [x, setX] = useState(0);

  const handleMove = useCallback(
    (transform: Transform | null) => {
      if (transform && shouldUpdate) {
        const { x: newX } = transform;
        setX(newX);
      }
    },
    [shouldUpdate]
  );

  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={({ over }) => {
        setParent(over ? over.id : null);
        if (over) {
          setOpened(true);
          setShouldUpdate(false);
        } else {
          setX(0);
        }
      }}
      modifiers={[restrictToHorizontalAxis, restrictToParentElement]}
    >
      <div className={block.block()}>
        <div className={block.element("content")}>
          <div className={block.element("road")} />
          <div
            className={block.element("blocker")}
            style={
              x >= 0
                ? { right: `calc(100% - 10px - ${x}px)` }
                : { left: `${x}px` }
            }
          />
          <div className={block.element("handler-container")}>
            {parent === null ? (
              <DraggableItem onTransform={handleMove} />
            ) : null}
          </div>
          <Droppable id={DROPZONE_ID}>
            {parent === DROPZONE_ID ? (
              <>
                <DraggableItem />
                <div className={block.element("loader")} />
              </>
            ) : null}
          </Droppable>
        </div>
      </div>
      <DraggableOverlay />
    </DndContext>
  );
};

export const MemoizedUnlocker = React.memo(Unlocker);
