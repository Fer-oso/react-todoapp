import { arrayUnion, doc, updateDoc } from "firebase/firestore/lite";
import { firebaseStore } from "../../config/config";

export const createCommentInSubtask = async(uid, taskSelectedId, subtaskSelectedId,comments) => {

const subtaskDataRef = doc(
  firebaseStore,
  `${uid}/todos/tasks/${taskSelectedId}/subtasks/${subtaskSelectedId}`
);

await updateDoc(subtaskDataRef,  {comments: arrayUnion(comments)} );

};