import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bookstore demo
        </Typography>
        <Button color="inherit" startIcon={<Add />}>
          Add Book
        </Button>
      </Toolbar>
    </AppBar>
  );
};
