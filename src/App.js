import React, {Component} from "react";
import Jumbotron from "./components/Jumbotron";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import "./App.css"

class App extends Component{
    state = {
        todos : []
    }
// lifecycle method, kada se komponenta kreira, pokreće se ova metoda. Npr, nakon osvežavanja stranice
    componentDidMount(){
        let data = [];
        if(localStorage.data){
            data = JSON.parse(localStorage.data)
        }
        this.setState({
            todos : data,
        })
        console.log(localStorage.data);
        console.log(this.state.todos);
    }

    markTodo = (index)=>{
        const copyTodos=[...this.state.todos];
        copyTodos[index].done = !copyTodos[index].done;
        localStorage.data = JSON.stringify(copyTodos)
        this.setState({todos:copyTodos});
    }
    deleteTodo = (index) =>{
        const copyTodos = [...this.state.todos];
        copyTodos.splice(index,1);
        localStorage.data = JSON.stringify(copyTodos);
        this.setState({todos:copyTodos});
    }
    addIntoTodos = (todo) =>{
        todo.id=Math.floor(Math.random()*((100000-10)-10));
        localStorage.data = JSON.stringify([...this.state.todos, todo])
        this.setState({todos:[...this.state.todos, todo]})
    }
   render(){
       return(
               <div className="wrapp">
                   <Jumbotron />
                   <NewToDo addIntoTodos={this.addIntoTodos}/>
                   <ToDoList todos={this.state.todos} markTodo={this.markTodo} deleteTodo={this.deleteTodo}/>
               </div>
       )
   } 
}

export default App;