import { saveToLocalStorage } from '../utils/localStorage';

export const createTodoHandlers = (todoData, setTodoData, showNotification, setFormData) => ({
  handleDelete: (id) => {
    const targetItem = todoData.find(item => item.id === id);
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
    saveToLocalStorage('todoData', newTodoData);
    showNotification(`${targetItem.title} 항목이 삭제되었습니다.`);
  },

  handleSubmit: (e, formData) => {
    e.preventDefault();
    if (!formData.title || !formData.expenses) return;

    const newTodo = {
      id: Date.now(),
      title: formData.title,
      expenses: formData.expenses,
      completed: false
    };

    const updatedTodoData = [...todoData, newTodo];
    setTodoData(updatedTodoData);
    saveToLocalStorage('todoData', updatedTodoData);
    setFormData({ title: "", expenses: "" });
    showNotification(`${formData.title} 항목이 추가되었습니다.`);
  },

  handleRemoveAll: () => {
    setTodoData([]);
    saveToLocalStorage('todoData', []);
    showNotification("모든 항목이 삭제되었습니다.");
  }
});