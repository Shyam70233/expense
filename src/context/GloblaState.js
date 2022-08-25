import React, {useReducer, createContext} from "react";
import AppReducer from './AppReducer'
const initialstate = {
    transection : [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
]
} 
// Create Context
export const GlobalContext = createContext(initialstate);

// Provider Component
export const GlobalProvider = ({children}) => { 

    const [state, dispatch] = useReducer(AppReducer, initialstate);
    
    return(
        <GlobalProvider.Provider value={{transection: state.transection}}>
        {children}
        </GlobalProvider.Provider>
        );
}