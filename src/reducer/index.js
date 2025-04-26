export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const TOGGLE_TODO_ALL = "TOGGLE_TODO_ALL";
export const DELETE_TODO_COMPLETED = "DELETE_TODO_COMPLETED";
export const SET_FILTER = "SET_FILTER";

export const init = () => {
  const savedTodo = JSON.parse(window.localStorage.getItem("TODO")) || [];
  const savedID = JSON.parse(window.localStorage.getItem("ID")) || 0;
  return {
    list: savedTodo,
    id: savedID ? Number(savedID) : 0,
    filterType: "ALL",
  }
}
