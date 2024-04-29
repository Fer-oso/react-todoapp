import { arrayUnion, doc, updateDoc } from "firebase/firestore/lite";
import { firebaseStore } from "../../config/config";


export const createChangeinSubtask = async (
  uid,
  taskSelectedId,
  subtaskSelectedId,
  changes
) => {
  const subtaskDataRef = doc(
    firebaseStore,
    `${uid}/todos/tasks/${taskSelectedId}/subtasks/${subtaskSelectedId}`
  );

  await updateDoc(subtaskDataRef, { changes: arrayUnion(changes) });
};
