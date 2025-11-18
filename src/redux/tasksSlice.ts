import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface TasksState {
  tasks:[],
  isLoading:boolean,
  currentBoard: {},
}

const initialState: TasksState = {
  tasks:[],
  isLoading:false,
  currentBoard: {},
}

export const taskssSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.tasks = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchingInProgress, fetchingSuccess, fetchingError } = taskssSlice.actions;

export default taskssSlice.reducer;