import { doc, updateDoc } from "firebase/firestore/lite"
import { firebaseStore } from "../../config/config"

export const editTaskData = async(taskSelected,uid) =>{

const taskDataRef = doc(firebaseStore, `${uid}/todos/tasks/${taskSelected.id}`);

await updateDoc(taskDataRef, taskSelected);

}