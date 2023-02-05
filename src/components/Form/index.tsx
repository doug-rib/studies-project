import React, { useState } from "react";
import { ITarefas } from "../../types/tarefas";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid"

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

function Form({ setTarefas }: Props) {

  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00")

  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTarefas(tarefasAntigas => 
      [
        ...tarefasAntigas, 
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    )

    setTarefa("");
    setTempo("00:00");
  }

  return(
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Adicione um novo estudo
        </label>
        <input 
          type="text"
          name="task"
          value={tarefa}
          onChange={evento => setTarefa(evento.target.value)}
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
          value={tempo}
          onChange={evento => setTempo(evento.target.value)}
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

export default Form;