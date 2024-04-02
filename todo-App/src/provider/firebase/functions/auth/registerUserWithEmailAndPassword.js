import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../../config/config";

export const registerUserWithEmailAndPassword = async ({
  name,
  email,
  password,
}) => {
  try {
    await createUserWithEmailAndPassword(firebaseAuth, email, password);

    await updateProfile(firebaseAuth.currentUser, { displayName: name });

    return {
      status: "registered"
    };
  } catch (error) {

    return {
      status: "error",
      errorMessage: error.message,
    };
  }
};
