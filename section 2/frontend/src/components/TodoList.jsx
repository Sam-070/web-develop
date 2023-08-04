import React, { useState} from 'react'

const TodoList = () => {

    const [TodoList, setTodoList] = useState([]);

    const addNewTask = (e) => {
        // console.log(e.code);
        if(!e.target.value.trim()) return;
        if(e.code === 'Enter'){
            console.log(e.target.value);
            setTodoList([...TodoList, {text: e.target.value, completed: false} ]);
            e.target.value=" ";
            console.log(TodoList);
        }
    };

    const deleteTodo = (index) => {
        console.log(index);
        const temp = TodoList;
        temp.splice(index, 1);
        setTodoList([...temp]);
    }

  return (
    <div>
        <div className='container '>
            <p className='display-4 fw-bold text-center'>ToDo List</p>
            <hr/>
            
            <div className='card bg-secondary'>
                <div className='card-header'>
                    <input className='form-control' placeholder='Add Task Here'
                        onKeyDown={ addNewTask }
                    />
                </div>
                <div className='card-body'>
                <ul className='list-group'>
                    { TodoList.map( (obj, index) => { return <li className='list-group-item'>
                        <h4>{ obj.text }</h4>
                        <button onClick={ () => { deleteTodo(index) }} className='btn btn-danger btn-sm'>Delete</button>
                        <button className='btn btn-success ms-2 btn-sm'>Complete Task</button>
                    </li> } ) }
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoList