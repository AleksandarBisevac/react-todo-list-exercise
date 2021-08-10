import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({todos, markTodo, deleteTodo}) => {
    const allTodos = todos.map((todo,index)=>{
        return(
            <ToDo todo={todo} key={todo.id} index={index} markTodo={markTodo} deleteTodo={deleteTodo}/>
        )
    })
    return(
        <div className="container">
            <div className="row">
                {allTodos}
            </div>
        </div>
    )
}

export default ToDoList;