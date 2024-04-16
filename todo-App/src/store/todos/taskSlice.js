import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    task: {},
    listTasks: null,
    taskSelected: null,
    listTasksSelected: null,
    subtaskSelected: null,
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

    subtaskSelected: (state, action) => {
      state.subtaskSelected = action.payload
    },
    subtaskSelectedChecked: (state, action) => {
      state.subtaskSelected = action.payload;

      state.taskSelected.subTasks = state.taskSelected.subTasks.map((subtask) => {
        if (subtask.id === action.payload.id) {
          return action.payload;
        }
        return subtask;
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
  subtaskSelected,
  subtaskSelectedChecked,
} = taskSlice.actions;
