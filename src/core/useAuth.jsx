import { useContext } from "react";
import { AContext } from "./AppProvider";

export default function useAuth() {
    let {login, user, handleLogin, poppupLogin, logout} = useContext(AContext)
    return {login, user, handleLogin, poppupLogin, logout}
}