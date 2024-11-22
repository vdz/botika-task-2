import { configureStore } from '@reduxjs/toolkit'
import { initAppListeners } from '@/store/listener';
import { reducer as backgroundsReducer } from '@/store/background/background.reducer';
import { reducer as uiReducer } from '@/store/ui/ui.reducer';

const listenerMiddleware = initAppListeners();

export const store = configureStore({
  reducer: {
    backgrounds: backgroundsReducer,
    ui: uiReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware), 
});

export type GetAppState = typeof store.getState;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<GetAppState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;