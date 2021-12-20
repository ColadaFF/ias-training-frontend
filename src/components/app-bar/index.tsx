import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

function ApplicationBar() {
  return (
    <AppBar position="static">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        People App
      </Typography>
    </AppBar>
  );
}

export default ApplicationBar;
