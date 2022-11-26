import React, { Component } from "react";


// form
import { FaPlus } from 'react-icons/fa';

// tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './main.css'



export default class Main extends Component {
  state = { //estado
    novaTarefa: '',
    tarefas: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novaTarefas = [...tarefas];
    this.setState({
      tarefas: [...novaTarefas, novaTarefa],
    })
  }

  handleChange = (e) => {
    this.setState({ novaTarefa: e.target.value })
  }

  render() {

    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Litra de tarefas2</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tarefas">
          {tarefas.map((tarefas) => (
            <li key={tarefas}>
              {tarefas}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
