import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    task: {},
    listTasks: null,
    taskSelected: null,
    subtask: null,
    listSubtasks: [],
    subtaskSelected: null,
  },
  reducers: {
    createTask: (state, action) => {
      state.task = action.payload;
    },

    loadTasks: (state, action) => {
      state.listTasks = action.payload;
      state.task = action.payload.task;
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
      state.subtaskSelected = action.payload;
    },

    subtaskSelectedChecked: (state, action) => {
      state.taskSelected.subtasks = state.taskSelected.subtasks.map(
        (subtask) => {
          if (subtask.id === action.payload.id) {
            return action.payload;
          }
          return subtask;
        }
      );
    },

    createSubTask: (state, action) => {
      state.subtask = action.payload;
    },

    loadSubtasks: (state, action) => {
      state.listSubtasks = action.payload;
    },

    changeInSubtaskSelected: (state, action) => {
      state.subtaskSelected.changes = [
        ...state.subtaskSelected.changes,
        action.payload,
      ];
    },

    commentInSubtaskSelected: (state, action) => {
      state.subtaskSelected.comments = [
        ...state.subtaskSelected.comments,
        action.payload,
      ];
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
  createSubTask,
  loadSubtasks,
  changeInSubtaskSelected,
  commentInSubtaskSelected,
} = taskSlice.actions;
