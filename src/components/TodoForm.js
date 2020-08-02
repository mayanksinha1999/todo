import React,{useState} from 'react';
import {v4 as uuid} from 'uuid';
import {Button,TextField} from '@material-ui/core';

function TodoForm({addTodo}){
    const [todo,setTodo] = useState({
        id:"",
        task:"",
        completed: false
    });

function handleTaskInputChange(e){
    setTodo({...todo, task: e.target.value});
}

function handleSubmit(e){
    e.preventDefault();
    if(todo.task.trim()){
        addTodo({...todo, id: uuid.v4
        });
        //reset task input
        setTodo({...todo, task:""});
    }
}
    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
            name="task"
            onChange={handleTaskInputChange}
            value={todo.task}
            type="text" />
            <Button type="submit" >Submit</Button>
        </form>
    );
}

export default TodoForm;