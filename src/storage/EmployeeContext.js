import { createContext, useState} from "react";

const employeeContext = createContext();

export const EmployeeContextProvider = (props) =>{
    const [employeeList, setEmployeeList] = useState([]);
    
    const value = {
        employeeList,
        setEmployeeList
    }

    return(
        <employeeContext.Provider value={{value}}>
            {props.children}
        </employeeContext.Provider>
    )
}

export default employeeContext