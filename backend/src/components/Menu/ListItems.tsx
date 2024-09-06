import React from "react";
import { Avatar, Box, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  open: boolean;
  to: string;
  onClick?: () => void | undefined;
  children?: React.ReactNode;
}

interface SubMenuItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  onClick?: () => void | undefined;
}

// Componente para os itens do menu principal
export const MenuItem: React.FC<MenuItemProps> = ({ icon, label, open, onClick, children, to }) => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate(to);
        onClick?.();
    };
  return (
    <ListItemButton onClick={handleClick}>
      <ListItemIcon
        sx={{
          marginRight: "10px",
          justifyContent: open ? 'flex-start' : 'center',
          minWidth: open ? 'auto' : 0,
          color: "#ffffff", // Ícone branco
        }}
      >
        {icon}
      </ListItemIcon>
      {open && <ListItemText primary={label} sx={{ color: "#ffffff" }} />} {/* Texto branco também */}
      {children}
    </ListItemButton>
  );
};

// Componente para os itens do submenu
export const SubMenuItem: React.FC<SubMenuItemProps> = ({ icon, to, label, onClick }) => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate(to);
        onClick?.();
    };
  return (
    <ListItemButton  onClick={handleClick} sx={{ pl: 4 }}>
      <ListItemIcon sx={{ color: "#ffffff" }}> {/* Ícone branco */}
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} sx={{ color: "#ffffff" }} /> {/* Texto branco */}
    </ListItemButton>
  );
};

// Componente para a seção do logo
export const LogoSection: React.FC<{ open: boolean }> = ({ open }) => {
  const theme = useTheme();
  return (
    <Box display="flex" justifyContent={open ? "space-between" : "center"} alignItems="center" height={theme.spacing(8)} px={open ? 2 : 0}>
      <Avatar sx={{ height: theme.spacing(7), width: theme.spacing(7) }} alt="logo empresa" src="../../../Logo-Empresa/png/logo-color.png" />
    </Box>
  );
};