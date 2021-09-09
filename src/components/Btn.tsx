import React from "react";

type BtnPropsType = {
  title: string
  classNameTitle: string
  disabled: boolean
  clickFn: () => void
}

function Btn(props: BtnPropsType) {
  return (
    <button disabled={props.disabled}
            onClick={props.clickFn}
            className={props.classNameTitle}>{props.title}</button>
  )
}

export default Btn;