import { createTheme } from "@mui/material";



export const DarkTheme = createTheme({
    typography: {
        fontFamily: [
            'Helvetica Neue',  // Primeira opção
            'Arial',           // Alternativa caso Helvetica não esteja disponível
            'sans-serif',      // Fonte genérica para fallback
        ].join(','),
    },
    palette: {
        primary: {
            main: "#00d1cd", // Cor principal do logotipo
            dark: "#306868", // Um tom mais escuro da cor principal
            light: "#00fff0", // Um tom mais claro para variações
            contrastText: "#ffffff", // Branco para texto contrastante
        },
        secondary: {
            main: "#00d1cd", // Secundária também pode manter a cor principal
            dark: "#306868",
            light: "#00fff0",
            contrastText: "#ffffff",
        },
        background: {
            default: "#171717", // Fundo escuro, similar ao background da página de login
            paper: "#1f1f1f",   // Para papéis como inputs, uma tonalidade escura
        },
        text: {
            primary: "#ffffff", // Texto branco para contrastar com o fundo escuro
            secondary: "#b3b3b3", // Texto secundário, um cinza claro
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px", // Arredondar bordas
                    textTransform: "none", // Não transformar o texto
                    fontWeight: "bold",
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: "#ffffff", // Texto branco dentro dos inputs
                    backgroundColor: "#1f1f1f", // Fundo escuro nos campos de input
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: "#ffffff", // Cor branca nos itens do menu
                    "&:hover": {
                        backgroundColor: "#00d1cd", // Cor da sobreposição (hover)
                        color: "#ffffff", // Cor do texto durante a sobreposição
                    },
                    "&.Mui-selected": {
                        backgroundColor: "#00fff0", // Cor quando o item está selecionado
                        color: "#000000", // Cor do texto do item selecionado
                        "&:hover": {
                            backgroundColor: "#00d1cd", // Manter o hover para o item selecionado
                            color: "#ffffff",
                        }
                    },
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: "#ffffff", // Forçar cor branca no texto do menu
                },
            },
        },
    },
});