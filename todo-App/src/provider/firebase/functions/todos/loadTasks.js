import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseStore } from "../../config/config";

export const loadListTasksData = async (uid) => {
  const listTaskRef = collection(firebaseStore, `${uid}/todos/tasks`);

  const listTaskData = await getDocs(listTaskRef);

  const listTask = [];

  listTaskData.forEach((data) => {
    listTask.push({
      ...data.data(),
      id: data.id,
    });
  });

  return listTask;
};
