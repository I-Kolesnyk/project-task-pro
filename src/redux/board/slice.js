import { createSlice } from '@reduxjs/toolkit';
import { getBoardById, deleteColumn, editColumn, deleteCard, deleteBoard } from './operations';
import { addColumn, addCard, editCard } from './operations';

const initialState = {
  isLoading: false,
  info: {},
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateBoardColumns: (state, action) =>
    {
      state.info.columns = action.payload;
    },

  },
  extraReducers: builder =>
    builder
      .addCase(getBoardById.fulfilled, (state, action) =>
      {
        const board = action.payload.data.board[0];
        state = {
          isLoading: false,
          info: board,
        };
        return state;
      })
      .addCase(getBoardById.pending, state =>
      {
        state.isLoading = true;
      })
      .addCase(getBoardById.rejected, state =>
      {
        state.isLoading = false;
      })
      .addCase(deleteBoard.fulfilled, (state, action) =>
      {
        // const index = state.info.findIndex(board => board._id === action.payload.data.deleteBoard_id);
        // state.info.splice(index, 1);
      })
      .addCase(addColumn.fulfilled, (state, action) =>
      {
        const newColumn = {
          ...action.payload.data.column,
          tasks: [],
        };
        state.info.columns.push(newColumn);
      })
      .addCase(addCard.fulfilled, (state, action) =>
      {
        const columnIdToUpdate = action.payload.data.taks.column;

        const changedColumn = state.info.columns.find(
          column => column._id === columnIdToUpdate
        );

        if (changedColumn) {
          changedColumn.tasks.push(action.payload.data.taks);
        }
      })
      .addCase(editCard.fulfilled, (state, action) =>
      {
        const changedColumnId = action.payload.data.task.column;
        const changedTaskId = action.payload.data.task._id;
        const changedColumn = state.info.columns.find(
          column => column._id === changedColumnId
        );

        if (changedColumn) {
          const changedTask = changedColumn.tasks.find(
            task => task._id === changedTaskId
          );

          if (changedTask) {
            changedTask.title = action.payload.data.task.title;
            changedTask.description = action.payload.data.task.description;
            changedTask.priority = action.payload.data.task.priority;
            changedTask.deadline = action.payload.data.task.deadline;
          }
        }
      }).addCase(deleteCard.fulfilled, (state, action) =>
      {
        //   const changedColumnId = action.payload.data.deletedTask.column;
        //   const changedTaskId = action.payload.data.deletedTask._id;
        //   const changedColumn = state.info.columns.find(
        //     column => column._id === changedColumnId
        //   );

        //   if (changedColumn) {
        //     const changedTask = changedColumn.deletedTask.find(
        //       task => task._id === changedTaskId
        //     );
        //     if (changedTask) {
        //       changedTask.splice(changedTaskId, 1, action.payload.data.task)
        //     }

      })
      .addCase(editColumn.fulfilled, (state, action) =>
      {
        const data = action.payload.data.column;
        const index = state.info.columns.findIndex(
          column => column._id === data._id
        );

        state.info.columns.splice(index, 1, data);
      })
      .addCase(deleteColumn.fulfilled, (state, action) =>
      {
        const index = state.info.columns.findIndex(column => column._id === action.payload.data._id);
        state.info.columns.splice(index, 1);
      }),
});

export const boardReducer = boardSlice.reducer;

export const { updateBoardColumns } = boardSlice.actions;
