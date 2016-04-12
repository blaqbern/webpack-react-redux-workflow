import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

let finalCreateStore
export default function configureStore() {
  if (__DEV__ && !__NO_DEV_TOOLS__) {
    const DevTools = require('../containers/DevTools').default
    finalCreateStore = compose(
      applyMiddleware(thunk),
      DevTools.instrument()
    )(createStore)
  } else {
    finalCreateStore = applyMiddleware(thunk)(createStore)
  }
  const store = finalCreateStore(rootReducer)

  if (__DEV__ && module.hot) {
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(require('./rootReducer'))
    )
  }

  return store
}
