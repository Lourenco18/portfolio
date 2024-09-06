import { ReactNode } from "react"; 
import { createContext, useCallback,useContext, useState } from "react";


interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}
const DrawerContext = createContext({} as IDrawerContextData);

export const useAppDrawerContext= ()=>{
    return useContext(DrawerContext);
}
interface IDrawerProviderProps{
    children: ReactNode;  
}
export const AppDrawerProvider: React.FC<IDrawerProviderProps> = ({children}:IDrawerProviderProps)=>{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawerOpen = useCallback(()=>{
        setIsDrawerOpen((oldDraweOpen)=> !oldDraweOpen );
    },[]);  
    return(
        <DrawerContext.Provider value={{isDrawerOpen,toggleDrawerOpen}}>
            {children}
        </DrawerContext.Provider>


    );
}