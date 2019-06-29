import { combineReducers } from 'redux';
import app from '@samoyed/app';
import configureStore from '@samoyed/redux/configureStore';
import detailsReducer from '@samoyed/redux/details';
import listsReducer from '@samoyed/redux/lists';
import siteReducer from '@samoyed/redux/site';
import userReducer from '@samoyed/redux/user';
import pagesReducer from '@samoyed/redux/pages';
import layoutsReducer from '@samoyed/redux/layouts';
import rootSaga from './sagas';

function createStore() {
  const rootReducer = combineReducers({
    site: siteReducer,
    user: userReducer,
    lists: listsReducer,
    details: detailsReducer,
    pages: pagesReducer,
    layouts: layoutsReducer,
  });

  return configureStore(rootReducer, rootSaga);
}

const store = createStore();

app.store = store;

export default store;
