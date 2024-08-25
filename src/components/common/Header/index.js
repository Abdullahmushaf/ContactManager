import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "./styles";

const Header = ({ title }) => {
  return (
    <Box component="div" sx={styles.header}>
      <Container>
        <Typography variant="h1" sx={{ fontSize: { xs: "16px", lg: "32px" } }}>
          {title}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
