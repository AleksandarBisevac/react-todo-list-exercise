(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{15:function(t,e,o){"use strict";o.r(e);var a=o(1),s=o(9),c=o.n(s),n=o(2),d=o(3),r=o(4),i=o(6),l=o(5),j=(o(8),o(0)),b=function(){return Object(j.jsx)("div",{className:"jumbotron text-center",children:Object(j.jsx)("h3",{children:"React ToDo"})})},u=function(t){Object(i.a)(o,t);var e=Object(l.a)(o);function o(){var t;Object(d.a)(this,o);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={msg:"",done:!1},t.setNewMsg=function(e){t.setState({msg:e.target.value})},t.addTodo=function(){t.props.addIntoTodos(t.state),t.setState({msg:"",done:!1})},t}return Object(r.a)(o,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row m-5",children:Object(j.jsx)("div",{className:"col-8 offset-2",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("input",{onChange:this.setNewMsg,value:this.state.msg,type:"text",className:"form-control",placeholder:"new message"}),Object(j.jsx)("div",{className:"input-group-append",children:Object(j.jsx)("button",{onClick:this.addTodo,className:"btn btn-primary",children:"Add"})})]})})})})}}]),o}(a.Component),h=function(t){var e=t.todo,o=t.index,a=t.markTodo,s=t.deleteTodo;return Object(j.jsx)("div",{className:"col-sm-6 col-lg-4",children:Object(j.jsxs)("div",{className:"card text-center",children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsxs)("h4",{children:["Todo: ",o+1]})}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("h3",{className:e.done?"complete":"incomplete",children:e.msg})}),Object(j.jsxs)("div",{className:"card-footer d-flex justify-content-between",children:[Object(j.jsx)("button",{onClick:function(){s(o)},className:"btn btn-danger",children:"Delete"}),Object(j.jsx)("button",{onClick:function(){a(o)},className:"btn btn-warning",children:"Mark"})]})]})})},m=function(t){var e=t.todos,o=t.markTodo,a=t.deleteTodo,s=e.map((function(t,e){return Object(j.jsx)(h,{todo:t,index:e,markTodo:o,deleteTodo:a},t.id)}));return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:s})})},O=function(t){Object(i.a)(o,t);var e=Object(l.a)(o);function o(){var t;Object(d.a)(this,o);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={todos:[]},t.markTodo=function(e){var o=Object(n.a)(t.state.todos);o[e].done=!o[e].done,localStorage.data=JSON.stringify(o),t.setState({todos:o})},t.deleteTodo=function(e){var o=Object(n.a)(t.state.todos);o.splice(e,1),localStorage.data=JSON.stringify(o),t.setState({todos:o})},t.addIntoTodos=function(e){e.id=Math.floor(99980*Math.random()),localStorage.data=JSON.stringify([].concat(Object(n.a)(t.state.todos),[e])),t.setState({todos:[].concat(Object(n.a)(t.state.todos),[e])})},t}return Object(r.a)(o,[{key:"componentDidMount",value:function(){var t=[];localStorage.data&&(t=JSON.parse(localStorage.data)),this.setState({todos:t}),console.log(localStorage.data),console.log(this.state.todos)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"wrapp",children:[Object(j.jsx)(b,{}),Object(j.jsx)(u,{addIntoTodos:this.addIntoTodos}),Object(j.jsx)(m,{todos:this.state.todos,markTodo:this.markTodo,deleteTodo:this.deleteTodo})]})}}]),o}(a.Component);c.a.render(Object(j.jsx)(O,{}),document.querySelector("#root"))},8:function(t,e,o){}},[[15,1,2]]]);
//# sourceMappingURL=main.3d68771b.chunk.js.map