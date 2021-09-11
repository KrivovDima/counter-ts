import React, {useState} from 'react';
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


  // let [minValue, setMinValue] = useState<number | ''>(getSettings().minValue);
  // let [maxValue, setMaxValue] = useState<number | null>(getSettings().maxValue);
  // let [correctSettings, setCorrectSettings] = useState(getSettings().save);
  // let [count, setCount] = useState(minValue);
  //
  // function getSettings() {
  //   const saveSettings = localStorage.getItem('settings');
  //   if (saveSettings) {
  //     return JSON.parse(saveSettings);
  //   } else {
  //     return {
  //       minValue: '',
  //       maxValue: null,
  //       save: false
  //     }
  //
  //   }
  // }
  //
  // const saveSettingsLocalStorage = (minValue: number, maxValue: number) => {
  //   const settings = {minValue, maxValue, save: true};
  //   localStorage.setItem('settings', JSON.stringify(settings));
  // }
  //
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


  //
  // let errorMin = false;
  // let errorMax = false;
  // if (minValue !== null && minValue <= 0) {
  //   errorMin = true
  // }
  // if (maxValue !== null && maxValue <= 0) {
  //   errorMax = true
  // }
  // if (minValue !== null && maxValue !== null && minValue >= maxValue) {
  //   errorMin = true
  //   errorMax = true
  // }
  //
  // const addSettings = () => {
  //   if (!errorMin && !errorMax && minValue && maxValue) {
  //     setCorrectSettings(true)
  //     setCount(minValue);
  //     saveSettingsLocalStorage(minValue, maxValue);
  //   } else return
  // }
  //
  // function changeSettings(value: boolean) {
  //   setCorrectSettings(value);
  // }
  //
  // const tripConditionSet = (errorMin || errorMax) || (!minValue || !maxValue) || correctSettings;


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
        <button onClick={() => {
          localStorage.clear()
        }}>resetLS
        </button>

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
