import { all, takeLatest, put} from "redux-saga/effects";

function* fetchNews() {
    const json = yield fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e2647c10a1a74b9586e48dc9376bd6b6")
        .then(response => response.json());

    yield put({
        type: "NEWS_RECEIVED", 
        json: json.articles || [{
            error: json.messge
        }]
    })
}

function* actionWatcher() {
    yield takeLatest("GET_NEWS", fetchNews);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(), 
    ])
}