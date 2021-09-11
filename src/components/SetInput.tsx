import React, {ChangeEvent} from "react";

type SetInputPropsType = {
  label: string
  value: number
  onChange: (value: number) => void
  error: boolean
  changeSettings: (value: boolean) => void

}

export function SetInput(props: SetInputPropsType) {

  const changeValue = (event:ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.valueAsNumber;
    props.onChange(value);
    props.changeSettings(false);
  }

  return (
    <div className={'SetInputWrapper'}>
      <label className={'SetInputLabel'}>
        {props.label}
        <input onChange={changeValue}
               value={props.value}
               className={`inputSet ${props.error ? 'error' : ''}`}
               type="number"/>
      </label>
    </div>
  )
}