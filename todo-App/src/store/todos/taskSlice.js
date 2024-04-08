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
    setTaskSelected: (state, action) => {
      state.task = action.payload.task;
      state.taskSelected = action.payload;
    },

    taskEnabledChecked: (state) => {
      state.taskSelected.enabled = !state.taskSelected.enabled;
    },

    taskApprovedChecked: (state, action) => {
      state.taskSelected.checked = action.payload;
    },

    taskDeniedChecked:(state,action) =>{
      state.taskSelected.checked = action.payload;
    }
  },
});

export const {
  noTaskSelectedInitialState,
  createTask,
  loadTasks,
  setTaskSelected,
  taskEnabledChecked,
  taskApprovedChecked,
  taskDeniedChecked,
} = taskSlice.actions;
