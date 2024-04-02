import { firebaseAuth } from "../../config/config"

export const logoutUser = async () =>{
    firebaseAuth.signOut();

    return {
        status: "signout"
    }
}