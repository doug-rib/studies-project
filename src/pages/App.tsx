import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITarefas } from '../types/tarefas';
import style from "./App.module.scss"

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefas>()

  function selecionaTarefa(tarefaSelecionada: ITarefas) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Timer selecionado={selecionado} />
    </div>
  );
}

export default App;
