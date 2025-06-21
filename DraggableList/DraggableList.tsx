import { DragIndicatorIcon } from '@/components/ui/icon';
import arrayUtil from '@/lib/arrayUtils';
import React from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

export const DraggableHandleIcon = DragIndicatorIcon;

interface Data {
  _id: string;
  [key: string]: any;
}
interface DraggableListProps<T> {
  items: T[];
  renderItem: (param: { item: T; index: number; isDragging?: boolean }) => React.ReactElement;
  onChange: (param: { updatedItems: T[] }) => void;
}

const DraggableList = <T extends Data>({
  items,
  renderItem = ({ item }) => <p>{item.label || item._id}</p>,
  onChange,
}: DraggableListProps<T>) => {
  const handleDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) {
      return;
    }
    const newArray = arrayUtil.reOrderArray({
      array: items,
      prevIndex: source.index,
      updatedIndex: destination.index,
    });
    onChange({ updatedItems: newArray });
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable-list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => {
              return (
                <Draggable draggableId={item._id} index={index} key={item._id}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {renderItem({ item, index, isDragging: snapshot.isDragging })}
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
