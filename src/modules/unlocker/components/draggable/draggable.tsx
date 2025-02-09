/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from "react";
import type { DraggableSyntheticListeners } from "@dnd-kit/core";

import "./draggable.scss";
import { createBlock } from "../../../../utils";

interface Props {
  listeners?: DraggableSyntheticListeners;
  style?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
}

const block = createBlock("draggable");

export const Draggable = forwardRef<HTMLButtonElement, Props>(
  ({ listeners, style, buttonStyle, ...props }, ref) => (
    <div className={block.block()} style={style}>
      <button
        {...props}
        style={buttonStyle}
        type="button"
        {...listeners}
        ref={ref}
      />
    </div>
  )
);
