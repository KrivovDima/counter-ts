import React from "react";

type DisplayCounterPropsType = {
  count: number | null
  maxCount: number | null
  correctSettings: boolean
}

function DisplayCounter(props: DisplayCounterPropsType) {
  return (
    <div className={`displayCounter ${props.count === props.maxCount ? 'maxCount' : ''}`}>
      {
        props.correctSettings ?
          props.count :
          <span className={'warningMessage'}>Enter correct settings and save</span>
      }

    </div>
  )
}

export default DisplayCounter;