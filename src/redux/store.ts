import { configureStore } from '@reduxjs/toolkit';
import boardsSliceReduser from './boardsSlice';
import tasksSliceReduser from './tasksSlice';

export const store = configureStore({
  reducer: {
    boards: boardsSliceReduser,
    tasks: tasksSliceReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;