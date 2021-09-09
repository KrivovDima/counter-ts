import React from "react";
import Btn from "./Btn";

type ButtonsPropsType = {
  incCounter: () => void
  resetCounter: () => void
  count: number | null
  maxCount: number | null
  minCount: number | null
  correctSettings: boolean
}

function Buttons(props: ButtonsPropsType) {

  return (
    <div className="buttons">
      <Btn title={'inc'}
           classNameTitle={'btn'}
           disabled={!props.correctSettings || props.count === props.maxCount}
           clickFn={props.incCounter}/>
      <Btn title={'reset'}
           classNameTitle={'btn'}
           disabled={!props.correctSettings || props.count === props.minCount}
           clickFn={props.resetCounter}/>
    </div>
  )
}

export default Buttons;