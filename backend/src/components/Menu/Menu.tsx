// Menu.tsx
import React from "react";
import { Box, Drawer, List, Collapse, useTheme } from "@mui/material";
import {
  Settings as SettingsIcon,
  People as PeopleIcon,
  Build as BuildIcon,
  Folder as FolderIcon,
  TableChart as TableChartIcon,
  BarChart as BarChartIcon,
  Business as BusinessIcon,
  Group as GroupIcon,
  ExpandLess,
  ExpandMore,
  StarBorder,
  Female as FemaleIcon,
  EmojiFlags as EmojiFlagsIcon
} from '@mui/icons-material';
import { MenuItem, SubMenuItem, LogoSection } from './ListItems.tsx'; 
import "./Menu.css";


interface MenuProps {
  children?: React.ReactNode;
}


export const Menu: React.FC<MenuProps> = ({ children }) => {
  const theme = useTheme();
  const [menuOpen] = React.useState(false);
  const [submenuOpen, setSubmenuOpen] = React.useState(true);
  const [hovered, setHovered] = React.useState(false);


  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <>
      <Drawer
        variant={'permanent'}
        open={menuOpen || hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          width: menuOpen || hovered ? 240 : 72,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: menuOpen || hovered ? 240 : 72,
            transition: 'width 0.3s',
            boxSizing: 'border-box',
          },
        }}
      >
        <Box display="flex" flexDirection="column" height="100%">
          <LogoSection open={menuOpen || hovered} />

          <Box flex={1}>
            <List component="nav">
              <MenuItem operationID ={1} dad={1} to={"./../controlpanel"}icon={<SettingsIcon />} label="Control Panel" open={menuOpen || hovered} />
              <MenuItem operationID ={2} dad={0} to={"./../tablepage"}icon={<PeopleIcon />} label="Users" open={menuOpen || hovered} />
              <MenuItem operationID ={3} dad={0} to={"./../tablepage"}icon={<BuildIcon />} label="Operations" open={menuOpen || hovered} />
              <MenuItem operationID ={4} dad={0} to={"./../tablepage"}icon={<FolderIcon />} label="All Projects" open={menuOpen || hovered} />
              <MenuItem operationID ={5} dad={1} to= {"./../controlpanel"}icon={<TableChartIcon />} label="Extra Tables" open={menuOpen || hovered} onClick={toggleSubmenu}>
                {submenuOpen ? <ExpandLess sx={{ color: "#ffffff" }} /> : <ExpandMore sx={{ color: "#ffffff" }} />}
              </MenuItem>

              <Collapse in={submenuOpen && (menuOpen || hovered)} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <SubMenuItem operationID ={6} dad={0} to={"./../listpage"} icon={<StarBorder />} label="Skills"  />
                  <SubMenuItem operationID ={7} dad={0} to={"./../listpage"} icon={<EmojiFlagsIcon />} label="Nationalities" />
                  <SubMenuItem operationID ={8} dad={0} to={"./../listpage"} icon={<FemaleIcon />} label="Gender" />
                  <SubMenuItem operationID ={9} dad={0} to={"./../listpage"} icon={<BarChartIcon />} label="Statistics" />
                  <SubMenuItem operationID ={10} dad={0} to={"./../listpage"} icon={<BusinessIcon />} label="Companies" />
                  <SubMenuItem operationID ={11} dad={0} to={"./../listpage"} icon={<GroupIcon />} label="Groups" />
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

