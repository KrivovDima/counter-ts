import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";

export type StateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  counter: counterReducer,
})

let preloaderState;
const persistedTodoString = localStorage.getItem('app-store')
if (persistedTodoString) {
  preloaderState = JSON.parse(persistedTodoString)
}

export const store = createStore(rootReducer, preloaderState)

store.subscribe(() => {
  localStorage.setItem('app-store', JSON.stringify(store.getState()))
})