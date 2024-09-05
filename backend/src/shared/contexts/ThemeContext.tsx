import { ReactNode, createContext, useCallback, useState, useMemo, useContext } from "react"; 
import { ThemeProvider } from '@mui/material';
import { DarkTheme,  } from '../themes/Dark';
import { LightTheme,  } from '../themes/Light';
import { Box } from '@mui/system';

interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContextData>({
    themeName: 'dark',
    toggleTheme: () => {}
});

interface IAppThemeProviderProps {
    children: ReactNode;  
}
export const UseAppThemeContext=( )=>{
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('dark');

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    },[]);

    const theme = useMemo(() => {
        if (themeName === 'light') {
            return LightTheme;
        }else {
            return DarkTheme;
        }
    },[themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width={"100vw"} height={"100vh"} >
                    {children}

                </Box>
                
            </ThemeProvider>
        </ThemeContext.Provider>    
    );
};
