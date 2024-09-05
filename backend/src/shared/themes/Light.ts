import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: "#FF0000", // Cor principal do logotipo
            dark: "#006b69", // Um tom mais escuro da cor principal
            light: "#4df7f5", // Um tom mais claro para variações
            contrastText: "#ffffff", // Branco para texto nos botões
        },
        secondary: {
            main: "#00d1cd", // Mantendo a cor secundária como a principal
            dark: "#006b69",
            light: "#4df7f5",
            contrastText: "#ffffff",
        },
        background: {
            default: "#f5f5f5", // Fundo claro, neutro
            paper: "#ffffff",   // Usado em cartões e inputs, branco puro
        },
        text: {
            primary: "#333333", // Texto escuro para contrastar com o fundo claro
            secondary: "#555555", // Texto secundário, um cinza médio
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px", // Arredondar bordas
                    textTransform: "none", // Não transformar o texto
                    fontWeight: "bold",
                    backgroundColor: "#00d1cd", // Cor do botão
                    color: "#ffffff", // Texto branco nos botões
                    '&:hover': {
                        backgroundColor: "#006b69", // Tom mais escuro no hover
                    }
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: "#333333", // Texto escuro dentro dos inputs
                    backgroundColor: "#ffffff", // Fundo branco nos campos de input
                    borderColor: "#cccccc", // Borda dos inputs
                    '&:hover': {
                        borderColor: "#00d1cd", // Mudar cor da borda ao passar o mouse
                    },
                },
            },
        },
    },
});

