import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useAppDispatch } from "../hooks/redux";
import { userAuthSlice } from "../store/redusers/UserAuthSlice";

export const TopBar = () => {
  const { logout } = userAuthSlice.actions;
  const dispatch = useAppDispatch();
  const LogOut = () => {
    localStorage.removeItem("userData");
    dispatch(logout());
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button color="inherit" onClick={LogOut}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
