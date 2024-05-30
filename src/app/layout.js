'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Box, Typography, AppBar, Toolbar, Link, Modal, Avatar, Button } from '@mui/material';
import { useState } from 'react';
import styles from "./globals.css";

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <html lang="en">
      <body>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Avatar sx={{backgroundColor: "#ffffff", margin: '8px'}} src="./favicon.ico" />
            <Button sx={{ color:"#ffffff" }} onClick={handleOpen} underline="none">
              {'Contact'}
            </Button>
          </Toolbar>
        </AppBar>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Email: shoumik.chowdhury24@gmail.com
            </Typography>
          </Box>
        </Modal>
        <AppRouterCacheProvider>
            {children}
        </AppRouterCacheProvider>
       </body>
    </html>
  );
}
