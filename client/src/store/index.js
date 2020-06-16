import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export function configureStore() {
  const store = createStore(
    rootReducer, // Pass in rootReducer to create store
    // Bundle middleware
    compose(
      applyMiddleware(thunk), // Apply thunk
      window.devToolsExtension ? window.devToolsExtension() : (f) => f //Enable browser redux devtools
    )
  );
  return store;
}
