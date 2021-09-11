import React from 'react';
import './App.css';
import DisplayCounter from "./components/DisplayCounter";
import Buttons from "./components/Buttons";
import {SetInput} from "./components/SetInput";
import Btn from "./components/Btn";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./store/store";
import {
  addSettingsAC,
  changeMaxValueAC,
  changeMinValueAC,
  changeSettingsAC,
  CounterStateType,
  incCountAC,
  resetCountAC
} from "./store/counterReducer";

function App() {
  const {
    count,
    minValue,
    maxValue,
    correctSettings,
    errorMin,
    errorMax,
    isDisabledSet,
  } = useSelector<StateType, CounterStateType>(state => state.counter)

  const dispatch = useDispatch()

  const changeMinValue = (value: number) => {
    dispatch(changeMinValueAC(value))
  }

  const changeMaxValue = (value: number) => {
    dispatch(changeMaxValueAC(value))
  }

  const incCounter = () => {
    dispatch(incCountAC())
  }

  const resetCounter = () => {
    dispatch(resetCountAC())
  }

  const changeSettings = (value: boolean) => {
    dispatch(changeSettingsAC(value))
  }

  const addSettings = () => {
    dispatch(addSettingsAC())
  }

  return (
    <div className="App">
      <div className="set">
        <SetInput error={errorMax}
                  onChange={changeMaxValue}
                  value={maxValue}
                  label={'max value'}
                  changeSettings={changeSettings}/>
        <SetInput error={errorMin}
                  onChange={changeMinValue}
                  value={minValue}
                  label={'start value'}
                  changeSettings={changeSettings}/>
        <Btn title={'set'}
             classNameTitle={`btn btnSet`}
             disabled={(errorMin || errorMax) || isDisabledSet}
             clickFn={addSettings}/>
      </div>
      <div className="counter">
        <DisplayCounter count={count}
                        correctSettings={correctSettings}
                        maxCount={maxValue}/>
        <Buttons incCounter={incCounter}
                 resetCounter={resetCounter}
                 count={count}
                 maxCount={maxValue}
                 minCount={minValue}
                 correctSettings={correctSettings}
        />
      </div>
    </div>
  );
}

export default App;
