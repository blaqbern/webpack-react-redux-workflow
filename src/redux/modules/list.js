import item from './item'

const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

export default function list(state = [], action) {
  const { payload } = action
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action),
      ]

    case 'REMOVE_ITEM':
      return state.filter((i) => i.id !== payload.id)

    case 'TOGGLE_COMPLETED':
      return state.map(
        (i) => {
          if (i.id === payload.id) {
            return item(i, action)
          }
          return i
        }
      )

    default:
      return state
  }
}

let nextId = 0
export function addItem(text) {
  return {
    type: ADD_ITEM,
    payload: {
      id: nextId++,
      text,
    },
  }
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    payload: {
      id,
    },
  }
}
