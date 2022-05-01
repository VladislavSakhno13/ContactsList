import { Button, Grid, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { AuthUser } from "../AuthFunction/AuthUser";
import { useAppDispatch } from "../hooks/redux";
import { userAuthSlice } from "../store/redusers/UserAuthSlice";
import axios from "axios";

const theme = createTheme();
export const AuthPage = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const { authUser } = userAuthSlice.actions;
  type User = { id: number; login: string; password: string };
  const userLogIn = () => {
    axios
      .get(
        "https://my-json-server.typicode.com/VladislavSakhno13/json-server/users"
      )
      .then((response) => {
        response.data.forEach((element: User) => {
          if (element.login === login && element.password === password) {
            console.log(element);
            dispatch(authUser(element));
            window.localStorage.setItem("userData", element.id.toString());
            return;
          }
        });
      })
      .catch((response) => {
        console.error(response);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setLogin(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={userLogIn}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
