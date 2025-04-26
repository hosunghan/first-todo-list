import { createContext, useEffect, useReducer } from "react";
import { init } from "../reducer"
import { initialState } from "../store/todoSlice";

export const TodoContext = createContext();

export const ToDoProvider = ({children}) => {

  const [state, dispatch ] = useReducer(initialState, init);
  
    useEffect(()=>{
      window.localStorage.setItem("TODO", JSON.stringify(state.list));
      window.localStorage.setItem("ID", JSON.stringify(state.id));
    }, [state]);


  return (
      <TodoContext.Provider value={{ state, dispatch }}>
        {children}
      </TodoContext.Provider>
  );
}