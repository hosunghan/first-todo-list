import './TodoList.css'
import TodoItems from './TodoItems';
import { TodoContext } from '../context';
import { DELETE_TODO_COMPLETED, TOGGLE_TODO, TOGGLE_TODO_ALL } from '../reducer';
import {useSelector, useDispatch} from 'react-redux';
import { deleteTodoCompleted, toggleTodoAll } from '../store/todoSlice';
function TodoList() {
    const state = useSelector(state => state.todo);
    const dispatch = useDispatch();
    const completedCount = state.list.filter(item=>item.completed).length
    const handleToogleAll = e => {
        dispatch(toggleTodoAll(e.target.checked))
    };
    const handleDeleteCompleted = () => {
        dispatch(deleteTodoCompleted());
    }
    const filteredList = state.list.filter((item) => {
        switch(state.filterType){
            case "TODO":
                return !item.completed;
            case "COMPLETED":
                return item.completed;
            default:
                return true;
        }
    });
    const isAllCompleted = 
    filteredList.length > 0 && filteredList.every((item)=>item.completed);
    return (
        <div className="todo-list">
            <div className="todo-header">
                <input type="checkbox" 
                        className='todo-checkbox' 
                        checked={isAllCompleted} 
                        onChange={handleToogleAll}
                />
                <p className='todo-header-text'>할 일</p>
                {
                    completedCount > 0 && (
                        <button className='todo-header-button' 
                                onClick={handleDeleteCompleted}
                        >
                            {completedCount}개 선택 삭제
                        </button>
                    )
                }
            </div>
            <div>
                {
                    filteredList.map((item)=>(
                    <TodoItems key={item.id} {...item}/>
                    ))
                }
            </div>
        </div>
    )
};

export default TodoList;