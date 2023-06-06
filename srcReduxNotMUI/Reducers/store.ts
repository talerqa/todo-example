import {combineReducers, legacy_createStore} from 'redux'
import {todolistReducer} from './todolistReducer';
import {tasksReducer} from './tasksReducer';

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  todolists: todolistReducer,
  tasks: tasksReducer,
})

export const store = legacy_createStore(rootReducer)

//@ts-ignore
window.store = store