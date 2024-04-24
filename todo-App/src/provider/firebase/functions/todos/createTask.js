import { collection, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { firebaseStore } from "../../config/config";

export const createTaskData = async (task, uid) => {

  const newTaskDataRef = doc(collection(firebaseStore, `${uid}/todos/tasks`));

  await setDoc(newTaskDataRef, task);

  const newTask = { ...task, id: newTaskDataRef.id};

  return newTask;
};
