//Файл оголошеня стор
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';

import { filterSlice } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';
// import { tasksReducer } from './tasks/slice';




// const middleware = [
//    ...getDefaultMiddleware({
//      serializableCheck: {
//        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//      },
//    }),
//  ];
 
 // Persisting token field from auth slice to localstorage
 const authPersistConfig = {
   key: 'auth',
   storage,
   whitelist: ['token'],
 };
 
 export const store = configureStore({
   reducer: {
     auth: persistReducer(authPersistConfig, authReducer),
    //  tasks: tasksReducer,

     contacts: contactsReducer,
     filter: filterSlice.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  //  middleware,
   devTools: process.env.NODE_ENV === 'development',
 });
 
 export const persistor = persistStore(store);
 


