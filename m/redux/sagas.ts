import { takeLatest, takeEvery, all } from 'redux-saga/effects';
import { detailSaga } from '@samoyed/redux/details';
import { listSaga, moreSaga } from '@samoyed/redux/lists';
import { deviceSaga } from '@samoyed/redux/device';

// 当action触发时，执行特定saga
export default function* rootSaga() {
  yield all([
    // takeLatest('STARTUP', deviceSaga),
    // takeEvery('LOAD_DETAIL', detailSaga),
    // takeEvery('LOAD_LIST', listSaga),
    // takeLatest('LOAD_MORE', moreSaga),
  ]);
}
