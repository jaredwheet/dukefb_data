import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const drawerStyle = {
  width: 250,
};

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FTW Data
          </Typography>

          <Button color="secondary" href="/attendance" component={Link}>
            Attendance
          </Button>

          <Button color="secondary" href="#" component={Link}>
            Alumni
          </Button>
          {/* <Typography variant="h6" component="div">
            FTW Data
          </Typography>
          <Typography variant="h6" component="div">
            FTW Data
          </Typography> */}
          <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <List sx={drawerStyle}>
              <ListItemButton>
                <ListItemText primary="Home" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="About" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Contact" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Services" />
              </ListItemButton>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
