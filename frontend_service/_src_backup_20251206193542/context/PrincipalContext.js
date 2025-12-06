import { createContext, useContext } from "react";
import { usePrincipal } from "../hooks/usePrincipal";

const PrincipalContext = createContext();

export const PrincipalProvider = ({ children }) => {
    const principal = usePrincipal();

    return (
        <PrincipalContext.Provider value={principal}>
            {children}
        </PrincipalContext.Provider>
    );
};

export const usePrincipalContext = () => useContext(PrincipalContext);
