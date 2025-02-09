import React from "react";
import { useDroppable, UniqueIdentifier } from "@dnd-kit/core";
import cn from "classnames";
import { createBlock } from "../../../../utils";
import "./droppable.scss";

interface Props {
  children: React.ReactNode;
  id: UniqueIdentifier;
}

const block = createBlock("droppable");

export const Droppable = ({ children, id }: Props) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={cn(block.block(), { [block.modifyBlock("over")]: isOver })}
    >
      {children}
    </div>
  );
};
