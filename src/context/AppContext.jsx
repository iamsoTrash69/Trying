import { createContext } from "react";
import { Mentors } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const CurrencySymbol = '₹'

    const value = {
        Mentors, CurrencySymbol
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider