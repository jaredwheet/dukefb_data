import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ProgressSpinner = ({ size = 40, color = "primary" }) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress size={size} color={color} />
    </Box>
  );
};

export default ProgressSpinner;
