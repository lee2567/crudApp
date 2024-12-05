export const INITIAL_FORM_DATA = {
    title: "",
    expenses: ""
  };
  
  export const getInitialTodoData = () => {
    return localStorage.getItem("todoData") 
      ? JSON.parse(localStorage.getItem('todoData'))
      : [];
  };