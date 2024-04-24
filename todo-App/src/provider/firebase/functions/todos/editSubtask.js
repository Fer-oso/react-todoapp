import { doc, updateDoc } from "firebase/firestore/lite";
import { firebaseStore } from "../../config/config";

export const editSubtaskData = async( uid, taskSelectedId, subtaskSelected) =>{

const subtaskDataRef = doc(
  firebaseStore,
  `${uid}/todos/tasks/${taskSelectedId}/subtasks/${subtaskSelected.id}`
);

await updateDoc(subtaskDataRef, subtaskSelected);

}