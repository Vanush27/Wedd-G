import React, { useEffect } from 'react';
import { useDraggable } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';
import { Draggable } from '../draggable';

const DraggableItem = ({ onTransform }: { onTransform?: (transform: Transform | null) => any }) => {
  const {
    isDragging,
    setNodeRef,
    listeners,
    transform,
  } = useDraggable({
    id: 'draggable-item',
  });

  useEffect(() => {
    if (onTransform) {
      onTransform(transform);
    }
  }, [onTransform, transform]);

  return (
    <Draggable
      ref={setNodeRef}
      listeners={listeners}
      style={{ opacity: isDragging ? 0 : undefined }}
    />
  );
};

export const MemoizedDraggableItem = React.memo(DraggableItem);
