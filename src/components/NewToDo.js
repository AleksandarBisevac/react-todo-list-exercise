import React,{Component} from "react";

class NewToDo extends Component{
    state={
        msg:"",
        done: false,
    }
    setNewMsg = (e) => {
        this.setState({
            msg: e.target.value,
        }
        )
    }
    addTodo = () => {
        this.props.addIntoTodos(this.state);
        this.setState({msg:"",done:false});
    }

    render(){return(        
    <div className="container">
        <div className="row m-5">
            <div className="col-8 offset-2">
                <div className="input-group">
                    <input onChange={this.setNewMsg} value={this.state.msg} type="text" className="form-control" placeholder="new message" />
                    <div className="input-group-append">
                        <button onClick={this.addTodo} className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)

    }
}

export default NewToDo;