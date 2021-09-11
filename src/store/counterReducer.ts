export type CounterStateType = {
  count: number
  minValue: number
  maxValue: number
  correctSettings: boolean
  errorMin: boolean
  errorMax: boolean
  isDisabledSet: boolean
}
type ActionsType = ReturnType<typeof changeMinValueAC>
  | ReturnType<typeof changeMaxValueAC>
  | ReturnType<typeof incCountAC>
  | ReturnType<typeof resetCountAC>
  | ReturnType<typeof addSettingsAC>
  | ReturnType<typeof changeSettingsAC>

const initialState: CounterStateType = {
  count: 0,
  maxValue: 0,
  minValue: 0 ,
  correctSettings: false,
  errorMax: false,
  errorMin: false,
  isDisabledSet: true,

}

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
  switch (action.type) {
    case "CHANGE-MIN-VALUE": {
      if (action.value < 0 || action.value >= state.maxValue) {
        return {
          ...state,
          minValue: action.value,
          errorMin: true,
        }
      } else {
        return {
          ...state,
          minValue: action.value,
          errorMin: false,
          errorMax: false,
        }
      }
    }
    case "CHANGE-MAX-VALUE": {
      if (action.value <= 0 || action.value <= state.minValue) {
        return {
          ...state,
          maxValue: action.value,
          errorMax: true,
        }
      } else {
        return {
          ...state,
          maxValue: action.value,
          errorMax: false,
          errorMin: false,
        }
      }
    }
    case "INCREMENT-COUNT": {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case "RESET-COUNT": {
      return {
        ...state,
        count: state.minValue
      }
    }
    case "ADD-SETTINGS": {
      if (!state.errorMax && !state.errorMin) {
        return {
          ...state,
          correctSettings: true,
          count: state.minValue,
          isDisabledSet: true,
        }
      } else {
        return {
          ...state
        }
      }
    }
    case "CHANGE-SETTINGS": {
      return {
        ...state,
        correctSettings: action.value,
        isDisabledSet: false,
      }
    }
    default: {
      return state;
    }
  }
}

export const changeMinValueAC = (value: number) => {
  return {
    type: 'CHANGE-MIN-VALUE',
    value,
  } as const
}

export const changeMaxValueAC = (value: number) => {
  return {
    type: 'CHANGE-MAX-VALUE',
    value,
  } as const
}

export const incCountAC = () => {
  return {
    type: 'INCREMENT-COUNT',
  } as const
}

export const resetCountAC = () => {
  return {
    type: 'RESET-COUNT',
  } as const
}

export const addSettingsAC = () => {
  return {
    type: 'ADD-SETTINGS',
  } as const
}

export const changeSettingsAC = (value: boolean) => {
  return {
    type: 'CHANGE-SETTINGS',
    value,
  } as const
}