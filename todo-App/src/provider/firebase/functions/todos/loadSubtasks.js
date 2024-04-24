import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseStore } from "../../config/config";

export const loadListSubtasksData = async (uid,taskId) => {
  const listSubtasksRef = collection(
    firebaseStore,
    `${uid}/todos/tasks/${taskId}/subtasks/`
  );

  const listSubtaskData = await getDocs(listSubtasksRef);

  const listSubtasks = [];

  listSubtaskData.forEach((data) => {
    listSubtasks.push({
      ...data.data(),
      id: data.id,
    });
  });

  return listSubtasks;
};
