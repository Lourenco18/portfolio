import { ReactNode } from "react"; 
import { Menu } from "../../components/Menu/Menu";
import { Box } from "@mui/material";

interface ILayoutProps {
  children: ReactNode;
  title?: string;
}

export const BasedLayout: React.FC<ILayoutProps> = ({ title, children }) => {
  return (
    <Box height={"100%"} display={"flex"} flexDirection={"column"} gap={1} marginLeft={3}>
        <Menu>
            <Box>   
                <h1>Navbar</h1>
            </Box>
            <Box>   
                <h1 >{title}</h1>
            </Box>
            <Box> 
                {children}
            </Box>
            
        </Menu>
    
    </Box>
  );
};
