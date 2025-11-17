import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface BoardsState {
  boards:[],
  isLoading:boolean,
  currentBoard: {},
}

const initialState: BoardsState = {
  boards:[],
  isLoading:false,
  currentBoard: {},
}

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.boards = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchingInProgress, fetchingSuccess, fetchingError } = boardsSlice.actions;

export default boardsSlice.reducer;