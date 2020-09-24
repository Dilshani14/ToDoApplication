import React, { Component } from "react";

import "./styles.css";

class CompletedTodos extends Component {
  render() {
    return (
      <div className="completed-todo">
        <div className="completed-to-do-header">Completed Todos</div>
        <div className="completed-content">
          <table>
            <tr>
              <th>Active</th>
              <th>Todo Name</th>
              <th>Delete</th>
            </tr>
            {this.props.todos.map((todo) => {
              return (
                <tr key={todo.name}>
                  <td>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => this.props.onChangeCheckBox(todo.name)}
                    />
                  </td>
                  <td>{todo.name}</td>
                  <td>
                    <span onClick={() => this.props.removeTodo(todo.name)}>
                      remove
                    </span>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}
export default CompletedTodos;
