import uuid from 'uuid';

export default function manageLogs(state={logs: [], comments: []}, action) {
  switch(action.type) {
    case 'ADD_LOG':
      const log = {
        id: uuid(),
        workouts: action.log.workouts,
        time: action.log.time
      }
      return {...state, logs: [...state.logs, log]}

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
