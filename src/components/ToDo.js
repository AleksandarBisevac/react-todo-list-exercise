import React from "react";

const ToDo = ({todo,index, markTodo, deleteTodo}) => {
    return(
        <div className="col-sm-6 col-lg-4">
            <div className="card text-center">
                <div className="card-header">
                    <h4>Todo: {index+1}</h4>
                </div>
                <div className="card-body">
                    <h3 className={todo.done ? "complete":"incomplete"}>{todo.msg}</h3>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <button onClick={()=>{
                        deleteTodo(index)
                    }} className="btn btn-danger">Delete</button>
                    <button onClick={()=>{
                        markTodo(index)
                    }} className="btn btn-warning">Mark</button>
                </div>
            </div>
        </div>
    )
}

export default ToDo;