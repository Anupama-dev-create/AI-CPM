import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          AI CRM - HCP Interaction Module
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;