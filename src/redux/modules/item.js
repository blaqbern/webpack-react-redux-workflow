const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

export default function item(state = {}, action) {
  const { payload } = action
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: payload.id,
        text: payload.text,
        completed: false,
        tags: [],
      }

    case 'TOGGLE_COMPLETED':
      return Object.assign({}, state, {
        completed: !state.completed,
      })

    case 'ADD_TAG': {
      const tag = payload.text.replace(' ', '_').toUpperCase()
      if (state.tags.indexOf(tag) === -1) {
        return Object.assign({}, state, {
          tags: [
            ...state.tags,
            tag,
          ],
        })
      }
      return state
    }

    default:
      return state
  }
}

export function toggleCompleted(id) {
  return {
    type: TOGGLE_COMPLETED,
    payload: {
      id,
    },
  }
}
