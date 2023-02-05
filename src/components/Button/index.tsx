import React from "react";
import style from "./Button.module.scss"

interface Props {
  texto?: string,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

function Button({ onClick, type, texto }: Props) {

  return(
    <button 
      onClick={onClick} 
      className={style.botao} 
      type={type}>
      {texto}
    </button>
  )
}

export default Button;