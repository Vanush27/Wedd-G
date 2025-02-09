import { createPortal } from "react-dom";
import { DragOverlay, useDndContext } from "@dnd-kit/core";
import { Draggable } from "../draggable";

export const DraggableOverlay = () => {
  const { active, over } = useDndContext();

  return createPortal(
    <DragOverlay>
      {active ? (
        <Draggable
          buttonStyle={
            over ? { boxShadow: "none", transform: "scale(0.9)" } : {}
          }
        />
      ) : null}
    </DragOverlay>,
    document.body
  );
};
