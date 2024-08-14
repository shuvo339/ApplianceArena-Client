import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const UseAuth = () => {
        const allvalues = useContext(AuthContext);
        return allvalues;
};

export default UseAuth;