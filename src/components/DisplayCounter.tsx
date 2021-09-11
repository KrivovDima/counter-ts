import React from "react";

type DisplayCounterPropsType = {
  count: number | ''
  maxCount: number | null
  correctSettings: boolean
}

function DisplayCounter(props: DisplayCounterPropsType) {
  return (
    <div className={`displayCounter ${props.count === props.maxCount ? 'maxCount' : ''}`}>
      {
        props.correctSettings ?
          props.count :
          <span className={'warningMessage'}>Enter correct settings and set</span>
      }

    </div>
  )
}

export default DisplayCounter;