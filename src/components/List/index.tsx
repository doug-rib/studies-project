import React, { useState } from "react";
import { ITarefas } from "../../types/tarefas";
import Item from "./item";
import style from "./List.module.scss"

interface Props {
  tarefas: ITarefas[],
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

function List({ tarefas, selecionaTarefa }: Props) {

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map(item => (
          <Item 
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;