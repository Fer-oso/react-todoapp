import { collection, doc, setDoc } from "firebase/firestore/lite"
import { firebaseStore } from "../../config/config"


export const createTask = async (task,uid) =>{

    const newTask = doc(collection(firebaseStore, `${uid}/todos/tasks/`));

    await setDoc(newTask,task);

    task.id = newTask.id;

    console.log(newTask);
    console.log(task)
    
}

