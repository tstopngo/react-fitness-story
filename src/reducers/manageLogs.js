import uuid from 'uuid';



export default function manageLogs(state={logs: [], comments: []}, action) {
  switch(action.type) {
    case 'ADD_LOG':
      const log = {
        id: uuid(),
        workouts: action.workouts,
        time: action.time
      }
      return {...state, logs: [...state.logs, log]}

    case 'DELETE_LOG':
      const logs = state.logs.filter(log => log.id !== action.id)
      return {...state, logs}

    default:
      return state;
  }
}