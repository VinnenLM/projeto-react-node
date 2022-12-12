import { configureStore } from '@reduxjs/toolkit';
import usuarioReducer from './usuarioReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistencia = persistReducer(persistConfig, usuarioReducer);

const store = configureStore(
    {
        reducer: persistencia,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            serializableCheck: false
        })
    });
const persistor = persistStore(store);

export { store, persistor };