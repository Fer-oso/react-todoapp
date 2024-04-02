import { signInWithEmailAndPassword } from "firebase/auth"
import { firebaseAuth } from "../../config/config"

export const loginUserWithEmailAndPassword = async ({email, password}) =>{

    try {
        
        const data = await signInWithEmailAndPassword(firebaseAuth,email,password);

        const {uid,displayName} = data.user

        const userAuthenticated = {uid,displayName,email}
        return {
            status: "authenticated",
            userAuthenticated
        }

    } catch (error) {
        console.log(error.message)
    }

}