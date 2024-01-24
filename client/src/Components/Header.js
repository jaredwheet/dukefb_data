import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Button, Link } from "@mui/material";
import FTWLogo from "./FTWLogo";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <FTWLogo />
          <Button
            color="secondary"
            href="/attendance"
            component={Link}
            sx={{
              fontFamily: "OPTIStainesXtraBoldExtend",
            }}
          >
            Game Data
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
