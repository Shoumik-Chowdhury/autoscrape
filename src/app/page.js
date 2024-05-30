import { Box, Button, Typography } from "@mui/material";

export default function Home() {

  return (
    <main>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "128px"
      }}>
        <Box sx={{
          maxWidth: '128px',
          marginBottom: '56px'
        }}>
          <img width='100%' src="./favicon.ico" />
        </Box>
        <Typography variant="h3" sx={{ color: '#4dabf5'}} gutterBottom>AUTOSCRAPE</Typography>
        <Button sx={{maxWidth: '100px', marginTop: '28px'}} href="/search" variant="contained">SEARCH</Button>
      </Box>
    </main>
  );
}
