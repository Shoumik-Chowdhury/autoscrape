"use client"
import { CircularProgress, Backdrop } from '@mui/material';

function LoadingScreen() {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
export default LoadingScreen;