// src/components/Layout.js
import React from 'react';
import { Box, Container } from '@mui/material';

function Layout({ children }) {
  return (
    <Box>
      <Container maxWidth="2xl" disableGutters={false}>
        {children}
      </Container>
    </Box>
  );
}

export default Layout;