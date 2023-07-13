import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../redux/actions';
import './todo.css';

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducer.list);

  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption>Add Your List Here ✌️</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder='✍️ Add Items...' 
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    <i className='fa fa-plus add-btn' onClick={() => { return dispatch(addTodo(inputData)), setInputData('')}} ></i>
                </div>

                <div className="showItems">
                    {
                        list.map((elem) => {
                            return (
                                <div className='eachItem' key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <div className='todo-btn'>
                                        <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="showItems">
                    <button className='btn' data-sm-link-text="remove All" onClick={() => dispatch(removeTodo())}><span>Check List</span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo