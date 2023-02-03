import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefas } from "../../types/tarefas";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss"

interface Props {
  selecionado: ITarefas | undefined
}

export default function Timer({ selecionado }: Props) {
  const [ tempo, setTempo ] = useState<number>()

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado])

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button texto="Iniciar"/>
    </div>
  )
}