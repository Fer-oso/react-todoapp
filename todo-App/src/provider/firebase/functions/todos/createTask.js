import { collection, doc, getDoc, setDoc } from "firebase/firestore/lite"
import { firebaseStore } from "../../config/config"


export const createTaskData = async (task,uid) =>{

    const newTaskDataRef = doc(collection(firebaseStore, `${uid}/todos/tasks/`));

    await setDoc(newTaskDataRef,task);



    const newTaskData = (await getDoc(newTaskDataRef)).data();

    const newTask = {...newTaskData,id:newTaskData.id};

    return newTask;
    
}

