import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    task: {},
    listTasks: [{}],
    taskSelected: {},
    listTasksSelected: [{}],
  },
  reducers: {
    noTaskSelectedInitialState: (state, action) => {
      state.taskSelected = action.payload.taskSelected;
    },

    createTask: (state, action) => {
      state.task = action.payload;
    },

    loadTasks: (state, action) => {
      state.listTasks = action.payload;
      state.task = action.payload.task;
      state.listTasksSelected = action.payload.listTasksSelected;
    },

    taskSelectedEnabled: (state, action) => {
      state.taskSelected = action.payload;
    },

    taskSelectedChecked: (state, action) => {
      state.taskSelected = action.payload;

      state.listTasks = state.listTasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    },
  },
});

export const {
  noTaskSelectedInitialState,
  createTask,
  loadTasks,
  taskSelectedEnabled,
  taskSelectedChecked,
} = taskSlice.actions;
