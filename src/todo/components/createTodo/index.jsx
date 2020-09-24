import React, { Component } from "react";
import "./styles.css";

class CreateTodo extends Component {
  state = {
    input: "",
  };

  onCreateTodo = () => {
    console.log("dame");
    // oncreatetodo function ekak create karanne ai?
    let newTodo = {
      name: this.state.input, //?
      completed: false, //ai active false denne ?
    };

    this.props.onCreateTodo(newTodo); //ai props gatte passe karanne moke idanda?
  };

  onChangeField = (event) => {
    this.setState({
      ...this.state,
      input: event.target.value,
    });
  };

  render() {
    return (
      <div className="create-todo">
        <div className="create-to-do-header">Create Todo</div>
        <div className="create-content">
          <div className="create-label">Enter todo name</div>
          <div className="create-input">
            <input
              placeholder="enter todo"
              value={this.state.input} //ai mekata changefield karanne?
              onChange={(event) => this.onChangeField(event)}
            />
          </div>
          <div className="create-button">
            <button onClick={this.onCreateTodo}>Create Todo</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTodo;
