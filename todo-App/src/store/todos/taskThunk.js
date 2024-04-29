import { doc } from "firebase/firestore/lite";
import { createSubTaskData } from "../../provider/firebase/functions/todos/createSubtask";
import { createTaskData } from "../../provider/firebase/functions/todos/createTask";
import { loadListSubtasksData } from "../../provider/firebase/functions/todos/loadSubtasks";
import { loadListTasksData } from "../../provider/firebase/functions/todos/loadTasks";
import {
  changeInSubtaskSelected,
  commentInSubtaskSelected,
  createSubTask,
  createTask,
  loadSubtasks,
  loadTasks,
  subtaskSelected,
  subtaskSelectedChecked,
  taskSelectedChecked,
  taskSelectedEnabled,
} from "./taskSlice";
import { editTaskData } from "../../provider/firebase/functions/todos/editTask";
import { editSubtaskData } from "../../provider/firebase/functions/todos/editSubtask";
import { createCommentInSubtask } from "../../provider/firebase/functions/todos/createComment";
import { createChangeinSubtask } from "../../provider/firebase/functions/todos/createChange";

export const startCreateTask = (task) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authentication.userAuthenticated;

    const taskCreated = await createTaskData(task, uid);

    dispatch(createTask(taskCreated));

    dispatch(startLoadTasks());
  };
};

export const startLoadTasks = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().authentication.userAuthenticated;

    const listTaskData = await loadListTasksData(uid);

    if (listTaskData.length === 0) return;

    dispatch(loadTasks(listTaskData));
  };
};

export const startSetTaskSelected = (taskSelected) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authentication.userAuthenticated;

    const listSubtasks = await loadListSubtasksData(uid, taskSelected.id);

    const getTaskSelected = { ...taskSelected, subtasks: listSubtasks };

    dispatch(taskSelectedEnabled(getTaskSelected));
    dispatch(startLoadSubtasks());
  };
};

export const startSetStatusIntask = (taskSelected) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authentication.userAuthenticated;

    delete taskSelected.enabled;

    await editTaskData(taskSelected, uid);

    dispatch(taskSelectedChecked(taskSelected));
  };
};

export const startCreateSubTask = (subtask) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authentication.userAuthenticated;
    const { id } = getState().tasks.taskSelected;

    const subtaskCreated = await createSubTaskData(subtask, uid, id);

    dispatch(createSubTask(subtaskCreated));

    dispatch(startLoadSubtasks());
  };
};

export const startLoadSubtasks = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().authentication.userAuthenticated;
    const { id } = getState().tasks.taskSelected;

    const listSubtasks = await loadListSubtasksData(uid, id);

    dispatch(loadSubtasks(listSubtasks));
  };
};

export const startSetStatusInSubtask = (taskSelectedId, subTaskSelected) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authentication.userAuthenticated;

    await editSubtaskData(uid, taskSelectedId, subTaskSelected);

    dispatch(subtaskSelectedChecked(subTaskSelected));

    dispatch(startLoadSubtasks());
  };
};

export const startSetChangeInSubTask = (changes) => {
  return async (dispatch, getState) => {
    dispatch( changeInSubtaskSelected(changes));

    const {uid} = getState().authentication.userAuthenticated;

    const {taskSelected,subTaskSelected} = getState().tasks;

    await createChangeinSubtask(uid,taskSelected.id,subTaskSelected.id,changes);

    dispatch(startLoadSubtasks());

  };
};

export const startSetCommentInSubTask = (comments) => {
  return async (dispatch, getState) => {
    dispatch(commentInSubtaskSelected(comments));

    const { uid } = getState().authentication.userAuthenticated;

    const { taskSelected, subtaskSelected } = getState().tasks;

    await createCommentInSubtask(
      uid,
      taskSelected.id,
      subtaskSelected.id,
      comments
    );

    dispatch(startLoadSubtasks());
  };
};
