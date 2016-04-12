const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export default function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return 'SHOW_ALL'

    case 'SET_VISIBILITY_FILTER':
      return action.filter

    default:
      return state
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: {
      filter,
    },
  }
}
