import React, { useState } from 'react';

const List = React.memo(
  ({
    id,
    title,
    expenses,
    completed,
    todoData,
    setTodoData,
    snapshot,
    handleClick,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState({
      title: title,
      expenses: expenses
    });

    const handleForm = e => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!form.title.trim() || !form.expenses.trim()) return;

      const newTodoData = todoData.map((data) =>
        data.id === id ? { ...data, title: form.title.trim(), expenses: form.expenses.trim() } : data
      );
      setTodoData(newTodoData);
      localStorage.setItem('todoData', JSON.stringify(newTodoData));
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex justify-between">
              <div className="flex justify-between w-1/2">
                <input 
                  name="title" 
                  type="text"
                  onChange={handleForm}
                  className="px-3 py-2 text-gray-500 rounded"
                  value={form.title} 
                />
                <input 
                  name="expenses" 
                  type="number"
                  onChange={handleForm}
                  className="px-3 py-2 text-gray-500 rounded"
                  value={form.expenses} 
                />
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-4 py-2 mr-2"
                  onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    }

    return (
      <div
        className={`
          flex items-center justify-between w-full px-4 py-1 my-2 
          text-gray-600 border rounded transition-all duration-200
          ${snapshot.isDragging ? 'bg-blue-100 shadow-lg scale-105' : 'bg-gray-100'}
          hover:bg-gray-200
        `}
      >
        <div className="flex justify-between w-1/2">
          <div className={completed ? 'line-through' : undefined}>
            <span>{form.title}</span>
          </div>
          <div className={completed ? 'line-through' : undefined}>
            <span>{form.expenses}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            className="px-4 py-2 text-red-500 hover:bg-red-100 rounded transition-colors duration-200"
            onClick={() => handleClick(id)}
          >
            Delete
          </button>
          <button
            className="px-4 py-2 text-blue-500 hover:bg-blue-100 rounded transition-colors duration-200"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
);

export default List;
