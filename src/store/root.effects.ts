import { all, fork } from "redux-saga/effects";
import { authSaga } from "./auth/auth.effects";

export default function* rootSaga() {
  yield all([
    fork(authSaga),
  ]);
}
