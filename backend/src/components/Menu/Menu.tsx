import { Avatar, Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

// Ícones da biblioteca MUI
import SettingsIcon from '@mui/icons-material/Settings'; // Control Panel
import PeopleIcon from '@mui/icons-material/People'; // Users
import BuildIcon from '@mui/icons-material/Build'; // Operations
import FolderIcon from '@mui/icons-material/Folder'; // All Projects
import TableChartIcon from '@mui/icons-material/TableChart'; // Extra Tables
import BarChartIcon from '@mui/icons-material/BarChart'; // Statistics
import BusinessIcon from '@mui/icons-material/Business'; // Companies
import GroupIcon from '@mui/icons-material/Group'; // Groups
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder'; // Sub-item Icon
import FemaleIcon from '@mui/icons-material/Female'; 
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';

import React from "react";
import "./Menu.css";
import { useAppDrawerContext } from "../../shared/contexts";

interface MenuProps {
  children?: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const {isDrawerOpen }= useAppDrawerContext();
  return (
    <>
      <Drawer open ={isDrawerOpen} variant={smDown ? 'temporary' : "permanent"}>
        <Box display={"flex"} flexDirection={"column"} height="100%">
          <Box width={"100%"} height={theme.spacing(19)} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Avatar sx={{ height: theme.spacing(15), width: theme.spacing(15) }} alt="logo empresa" src="../../../Logo-Empresa/png/logo-color.png" />
          </Box>
          <h1 className="NomeEmpresa">Admin Page</h1>
          <Box flex={1}>
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {/* Control Panel */}
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon sx={{ color: "#ffffff" }} />
                </ListItemIcon>
                <ListItemText primary="Control Panel" />
              </ListItemButton>

              {/* Users */}
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon sx={{ color: "#ffffff" }} />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>

              {/* Operations */}
              <ListItemButton>
                <ListItemIcon>
                  <BuildIcon sx={{ color: "#ffffff" }} />
                </ListItemIcon>
                <ListItemText primary="Operations" />
              </ListItemButton>

              {/* All Projects */}
              <ListItemButton>
                <ListItemIcon>
                  <FolderIcon sx={{ color: "#ffffff" }} />
                </ListItemIcon>
                <ListItemText primary="All Projects" />
              </ListItemButton>

              {/* Extra Tables */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <TableChartIcon sx={{ color: "#ffffff" }} />
                </ListItemIcon>
                <ListItemText primary="Extra Tables" />
                {open ? <ExpandLess sx={{ color: "#ffffff" }} /> : <ExpandMore sx={{ color: "#ffffff" }} />}
              </ListItemButton>

              {/* Submenu de Extra Tables */}
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder sx={{ color: "#ffffff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Skills" />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <EmojiFlagsIcon sx={{ color: "#ffffff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Nationalities" />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FemaleIcon sx={{ color: "#ffffff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Gender" />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <BarChartIcon sx={{ color: "#ffffff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Statistics" />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <BusinessIcon sx={{ color: "#ffffff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Companies" />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
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
      <Box height={"100vh"} marginLeft={smDown ? 0 :theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};