import { Avatar, Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse, useMediaQuery, useTheme } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import TableChartIcon from '@mui/icons-material/TableChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import FemaleIcon from '@mui/icons-material/Female';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';

import React from "react";
import "./Menu.css";

interface MenuProps {
  children?: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ children }) => {
  const theme = useTheme();
  const [menuOpen, ] = React.useState(false); // Estado para controlar o estado do menu (aberto/fechado)
  const [submenuOpen, setSubmenuOpen] = React.useState(true); // Estado para controlar o submenu de "Extra Tables"
  const [hovered, setHovered] = React.useState(false); // Estado para controlar quando o menu está sendo "hovered"
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  // Função para alternar o estado do submenu
  const handleSubmenuClick = () => {
    setSubmenuOpen(!submenuOpen);
  };



  // Função para ativar o hover
  const handleMouseEnter = () => {
    setHovered(true); // Expande o menu quando o mouse entra
  };

  // Função para desativar o hover
  const handleMouseLeave = () => {
    setHovered(false); // Recolhe o menu quando o mouse sai
  };

  return (
    <>
      <Drawer
        variant={smDown ? 'temporary' : "permanent"}
        open={menuOpen || hovered} // Abre o menu ao passar o mouse
        onMouseEnter={handleMouseEnter} // Expande ao passar o mouse
        onMouseLeave={handleMouseLeave} // Recolhe ao tirar o mouse
        sx={{
          width: menuOpen || hovered ? 240 : 72, // Ajusta a largura do menu
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: menuOpen || hovered ? 240 : 72,
            boxSizing: 'border-box',
            transition: 'width 0.3s', // Animação suave para o menu abrir/fechar
          },
        }}
      >
        <Box display="flex" flexDirection="column" height="100%">
          <Box display="flex" justifyContent={menuOpen || hovered ? "space-between" : "center"} alignItems="center" height={theme.spacing(8)} px={menuOpen || hovered ? 2 : 0}>
           
              <Avatar sx={{ height: theme.spacing(7), width: theme.spacing(7) }} alt="logo empresa" src="../../../Logo-Empresa/png/logo-color.png" />
           
           
          </Box>

          <Box flex={1}>
            <List component="nav">
              {/* Control Panel */}
              <ListItemButton>
                <ListItemIcon
                  sx={{ marginRight:"10px",
                
                    justifyContent: menuOpen || hovered ? 'flex-start' : 'center',
                    minWidth: menuOpen || hovered ? 'auto' : 0,
                  }}
                >
                  <SettingsIcon sx={{ color: "#ffffff" }} />
                </ListItemIcon>
                {(menuOpen || hovered) && <ListItemText primary="Control Panel" />}
              </ListItemButton>

              {/* Users */}
              <ListItemButton>
                <ListItemIcon
                  sx={{
                   marginRight:"10px",
                    justifyContent: menuOpen || hovered ? 'flex-start' : 'center',
                    minWidth: menuOpen || hovered ? 'auto' : 0,
                  }}
                >
                  <PeopleIcon sx={{ color: "#ffffff" }} />
                </ListItemIcon>
                {(menuOpen || hovered) && <ListItemText primary="Users" />}
              </ListItemButton>

              {/* Operations */}
              <ListItemButton>
                <ListItemIcon
                  sx={{
                   marginRight:"10px",
                    justifyContent: menuOpen || hovered ? 'flex-start' : 'center',
                    minWidth: menuOpen || hovered ? 'auto' : 0,
                  }}
                >
                  <BuildIcon sx={{ color: "#ffffff" }} />
                </ListItemIcon>
                {(menuOpen || hovered) && <ListItemText primary="Operations" />}
              </ListItemButton>

              {/* All Projects */}
              <ListItemButton>
                <ListItemIcon
                  sx={{
                   marginRight:"10px",
                    justifyContent: menuOpen || hovered ? 'flex-start' : 'center',
                    minWidth: menuOpen || hovered ? 'auto' : 0,
                  }}
                >
                  <FolderIcon sx={{ color: "#ffffff" }} />
                </ListItemIcon>
                {(menuOpen || hovered) && <ListItemText primary="All Projects" />}
              </ListItemButton>

              {/* Extra Tables */}
              <ListItemButton onClick={handleSubmenuClick}>
                <ListItemIcon
                  sx={{
                   marginRight:"10px",
                    justifyContent: menuOpen || hovered ? 'flex-start' : 'center',
                    minWidth: menuOpen || hovered ? 'auto' : 0,
                  }}
                >
                  <TableChartIcon sx={{ color: "#ffffff" }} />
                </ListItemIcon>
                {(menuOpen || hovered) && <ListItemText primary="Extra Tables" />}
                {(menuOpen || hovered) && (submenuOpen ? <ExpandLess sx={{ color: "#ffffff" }} /> : <ExpandMore sx={{ color: "#ffffff" }} />)}
              </ListItemButton>

              {/* Submenu de Extra Tables */}
              <Collapse in={submenuOpen && (menuOpen || hovered)} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder sx={{ color: "#ffffff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Skills" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <EmojiFlagsIcon sx={{ color: "#ffffff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Nationalities" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FemaleIcon sx={{ color: "#ffffff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Gender" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <BarChartIcon sx={{ color: "#ffffff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Statistics" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <BusinessIcon sx={{ color: "#ffffff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Companies" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <GroupIcon sx={{ color: "#ffffff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height={"100vh"} marginLeft={menuOpen || hovered ? theme.spacing(28) : theme.spacing(9)}>
        {children}
      </Box>
    </>
  );
};