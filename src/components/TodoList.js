import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todosToShow: "all",
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
  };

  render() {
    let todos = [];

    if (this.state.todosToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todosToShow === "active") {
      todos = this.state.todos.filter((todo) => {
        return !todo.complete;
      });
    } else if (this.state.todosToShow === "complete") {
      todos = this.state.todos.filter((todo) => {
        return todo.complete;
      });
    }
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.text}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
            deleteTodo={() => this.deleteTodo(todo.id)}
          />
        ))}
        <div>
          {this.state.todosToShow === "all" ? (
            <div>
              {" "}
              todos left :{" "}
              {
                this.state.todos.filter((todo) => {
                  return !todo.complete;
                }).length
              }{" "}
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <button onClick={() => this.setState({ todosToShow: "all" })}>
            all
          </button>
          <button onClick={() => this.setState({ todosToShow: "active" })}>
            active
          </button>
          <button onClick={() => this.setState({ todosToShow: "complete" })}>
            complete
          </button>
        </div>
      </div>
    );
  }
}
