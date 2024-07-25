import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/store/slices/auth-slice';
import categoryReducer from '@/store/slices/category-slice';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
});

// const persistConfig = {
//     // key: 'user',
//     storage,
//     // whitelist: ['auth']
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: rootReducer,
    middleware: () => [thunk],
})
