import { firebaseStore } from "../../config/config";
import { collection, doc, getDoc, setDoc } from "firebase/firestore/lite";

export const createSubTaskData = async (subtask, uid, taskId) => {
  const newSubtaskDataRef = doc(
    collection(firebaseStore, `${uid}/todos/tasks/${taskId}/subtasks/`)
  );

  await setDoc(newSubtaskDataRef, subtask);

  const newSubtaskData = (await getDoc(newSubtaskDataRef)).data();

  const newSubtask = { ...newSubtaskData, id: (await getDoc(newSubtaskDataRef)).id };

  return newSubtask;
};
