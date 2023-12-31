import { createSlice } from '@reduxjs/toolkit';
import { getBoardById, deleteColumn, editColumn } from './operations';
import { addColumn, addCard, editCard, deleteCard } from './operations';

const initialState = {
  isLoading: false,
  info: {},
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateBoardColumns: (state, action) => {
      state.info.columns = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getBoardById.fulfilled, (state, action) => {
        const board = action.payload.data.board[0];
        state = {
          isLoading: false,
          info: board,
        };
        return state;
      })
      .addCase(getBoardById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBoardById.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addColumn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        const newColumn = {
          ...action.payload.data.column,
          tasks: [],
        };
        state.info.columns.push(newColumn);
        state.isLoading = false;
      })
      .addCase(addColumn.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addCard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        const columnIdToUpdate = action.payload.data.taks.column;

        const changedColumn = state.info.columns.find(
          column => column._id === columnIdToUpdate
        );

        if (changedColumn) {
          changedColumn.tasks.push(action.payload.data.taks);
        }
        state.isLoading = false;
      })
      .addCase(addCard.rejected, state => {
        state.isLoading = false;
      })
      .addCase(editCard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editCard.fulfilled, (state, action) => {
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
        state.isLoading = false;
      })
      .addCase(editCard.rejected, state => {
        state.isLoading = false;
      })
      .addCase(editColumn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editColumn.fulfilled, (state, action) => {
        const data = action.payload.data.column;

        const index = state.info.columns.findIndex(
          column => column._id === data._id
        );
        const newData = {
          ...data,
          tasks: [...state.info.columns[index].tasks],
        };

        state.info.columns.splice(index, 1, newData);
        state.isLoading = false;
      })
      .addCase(editColumn.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteColumn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        const deletedColumnId = action.payload.data.deletedColumn._id;
        state.info.columns = state.info.columns.filter(
          column => column._id !== deletedColumnId
        );
        state.isLoading = false;
      })
      .addCase(deleteColumn.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteCard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        const deletedTaskId = action.payload.data.deletedTask._id;
        state.info.columns.forEach(column => {
          column.tasks = column.tasks.filter(
            task => task._id !== deletedTaskId
          );
        });
        state.isLoading = false;
      })
      .addCase(deleteCard.rejected, state => {
        state.isLoading = false;
      }),
});

export const boardReducer = boardSlice.reducer;

export const { updateBoardColumns } = boardSlice.actions;
