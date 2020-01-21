import uuid from 'uuid';

export default function manageLogs(state={logs: [], comments: [], loading: false}, action) {
  switch(action.type) {
    case 'LOADING_LOGS':
      return{
        ...state,
        logs: [...state.logs],
        loading: true
      }

    case 'ADD_LOGS':
      return {
        ...state,
        logs: action.logs,
        loading: false
      }

    case 'ADD_LOG':
       const log = {
         id: action.log.id,
         workouts: action.log.workouts,
         time: action.log.time,
      }

     return{
       ...state,
       logs: [...state.logs, log],
       loading: false
     }

    case 'DELETE_LOG':
      const logs = state.logs.filter(log => log.id !== action.id)
      return {...state, logs}

    case 'ADD_COMMENT':
        const comment = {
          id: uuid(),
          logId: action.comment.logId,
          text: action.comment.text,
        }
        return {...state, comments: [...state.comments, comment]}

    case 'DELETE_COMMENT':
        const comments = state.comments.filter(comment => comment.id !== action.id)
        return {...state, comments}

    default:
      return state;
  }
}
