import React, { useState } from "react";
import { ITarefas } from "../../types/tarefas";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid"

class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}> {

  state = {
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    this.props.setTarefas(tarefasAntigas => 
      [
        ...tarefasAntigas, 
        {
          ...this.state,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    )
    this.setState(
      {
        tarefa: "",
        tempo: "00:00"
      }
    )
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">
            Adicione um novo estudo
          </label>
          <input 
            type="text"
            name="task"
            value={this.state.tarefa}
            onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value})}
            id="task"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="time"
            value={this.state.tempo}
            onChange={evento => this.setState({ ...this.state, tempo: evento.target.value})}
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button
          texto="Adcionar"
          type="submit"
        />
      </form>
    )
  }
}

export default Form;