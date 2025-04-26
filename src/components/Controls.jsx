import { useState } from 'react';
import './Controls.css'
import { SET_FILTER } from '../reducer';
import { useSelector, useDispatch} from 'react-redux'
import { addTodo } from '../store/todoSlice';

function Controls() {
    const state = useSelector((state) => state.todo);   
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const handleChange= (e) => {
        setText(e.target.value);
    };
    const handleSubmit = () => {
        dispatch(addTodo(text));    
        setText("");
    };
    const handleChangeFilterType = (e) => {
        dispatch({type: SET_FILTER, payload: e.target.value});
    }
    return <div className="controls">
        <input type="text" 
                className="input" 
                value={text} 
                onChange={handleChange} />
        <button className="button" 
                onClick={handleSubmit}>추가</button>
        <select className="select" 
                value={state.filterType} 
                onChange={handleChangeFilterType}>
            <option value="ALL">전체</option>
            <option value="TODO">할 일</option>
            <option value="COMPLETED">완료</option>
        </select>
    </div>
}

export default Controls;