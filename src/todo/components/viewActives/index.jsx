import React, { Component } from "react";
import "./styles.css";

class ActiveTodo extends Component {
  render() {
    return (
      <div className="active-todo">
        <div className="active-to-do-header">Active Todos</div>
        <div className="active-content">
          <table>
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ActiveTodo;
