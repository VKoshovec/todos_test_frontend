import { RootState } from "./store";

export const selectAllBoards = (state: RootState) => state.boards.boards;
export const selectIsLoading = (state: RootState) => state.boards.isLoading;
export const selectCurrentBoard = (state: RootState) => state.boards.currentBoard;

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectTasksIsLoading = (state: RootState) => state.tasks.isLoading;

