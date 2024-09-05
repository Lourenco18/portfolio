import { ReactNode } from "react"; 
interface ILayoutProps{
    title: string;
    children: ReactNode;  
    toolbar?: ReactNode;
}