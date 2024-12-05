import React, { useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from './List';
import { motion } from "framer-motion";

const Lists = React.memo(({ todoData, setTodoData, handleClick }) => {
  const handleEnd = useCallback((result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    
    if (source.index === destination.index) return;

    const newTodoData = [...todoData];
    const [reorderedItem] = newTodoData.splice(source.index, 1);
    newTodoData.splice(destination.index, 0, reorderedItem);
    
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
  }, [todoData, setTodoData]);

  return (
    <DragDropContext onDragEnd={handleEnd}>
      <Droppable droppableId="todo-list">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`flex flex-col gap-2 w-full p-4 transition-colors duration-200 ${
              snapshot.isDraggingOver ? 'bg-blue-50' : 'bg-white'
            }`}
          >
            {todoData.map((data, index) => (
              <Draggable 
                key={data.id.toString()} 
                draggableId={data.id.toString()} 
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      transition: 'transform 0.2s ease'
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`${
                        snapshot.isDragging ? 'shadow-lg' : ''
                      }`}
                    >
                      <List
                        id={data.id}
                        title={data.title}
                        expenses={data.expenses}
                        completed={data.completed}
                        todoData={todoData}
                        setTodoData={setTodoData}
                        handleClick={handleClick}
                        snapshot={snapshot}
                      />
                    </motion.div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});

export default Lists;
