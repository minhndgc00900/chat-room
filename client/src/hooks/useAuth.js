import { useContext } from "react";
import { AuthContext } from "../context/auth";

const useAuth = () => {
    const { user, login } = useContext(AuthContext);
    if(!user && !login){
        throw new Error("AuthContext's value is undefined.");
    }

    return { user, login };
}

export { useAuth };