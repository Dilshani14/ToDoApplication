import React, { Component } from "react";
import CreateTodo from "./components/createTodo";
import ActiveTodo from "./components/viewActives";
import CompleteTodo from "./components/completedTodos";

import "./styles.css";

class Todo extends Component {
  state = {
    activeTab: "create",
    todos: [],
  };

  onChangeComponent = (active) => {
    //?
    this.setState({
      ...this.state,
      activeTab: active,
    });
  };

  onCreateTodo = (newTodo) => {
    let updatedTodos = this.state.todos;

    updatedTodos.push(newTodo);

    this.setState({
      ...this.state,
      todos: updatedTodos,
    });
  };

  onChangeCheckBox = (name) => {
    let updatedTodos = this.state.todos;

    updatedTodos = updatedTodos.map((todo) => {
      if (todo.name === name) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    this.setState({
      ...this.state,
      todos: updatedTodos,
    });
  };

  removeTodo = (name) => {
    let updatedTodos = this.state.todos.filter((todo) => todo.name !== name);

    this.setState({
      ...this.state,
      todos: updatedTodos,
    });
  };

  render() {
    let activeTodos = this.state.todos.filter((todo) => !todo.completed);

    let completedTodos = this.state.todos.filter((todo) => todo.completed);

    return (
      <div className="todo-app">
        <div className="header">
          <div
            className="header-item"
            onClick={() => this.onChangeComponent("create")}
          >
            Create Todo
          </div>
          <div
            className="header-item"
            onClick={() => this.onChangeComponent("actives")}
          >
            View Active Todos
          </div>
          <div
            className="header-item"
            onClick={() => this.onChangeComponent("completed")}
          >
            View Completed Todo
          </div>
        </div>
        <div className="content">
          {this.state.activeTab === "create" ? (
            <CreateTodo onCreateTodo={this.onCreateTodo} />
          ) : this.state.activeTab === "actives" ? (
            <ActiveTodo
              todos={activeTodos}
              onChangeCheckBox={this.onChangeCheckBox}
              removeTodo={this.removeTodo}
            />
          ) : this.state.activeTab === "completed" ? (
            <CompleteTodo
              todos={completedTodos}
              onChangeCheckBox={this.onChangeCheckBox}
              removeTodo={this.removeTodo}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Todo;
