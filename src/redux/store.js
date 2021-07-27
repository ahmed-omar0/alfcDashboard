import { createStore } from "redux";
import { reducer } from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["navbarIsOpened"]
}

const reducerPersisted = persistReducer(persistConfig ,reducer)

export const store = createStore(reducerPersisted, composeWithDevTools());
export const persistor = persistStore(store)
store.subscribe(() => true);