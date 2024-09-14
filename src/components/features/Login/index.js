import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AuthContext from "../../../context/auth/authContext";

const Login = () => {
  const { loginUserHandler } = useContext(AuthContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const inputChangeHandler = (e) =>
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const submitHandler = (e) => {
    e.preventDefault();
    loginUserHandler(data);
  };

  return (
    <Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        onSubmit={submitHandler}
      >
        <Stack
          rowGap={4}
          sx={{
            boxShadow: "1px 3px 4px rgba(0,0,0,0.2)",
            width: "400px",
            height: "auto",
            padding: "40px 20px",
            border: "1px solid #eee",
          }}
        >
          <Typography variant="h4" fontWeight={600} mb={2}>
            Log in
          </Typography>
          <TextField
            type="email"
            value={data.email}
            onChange={inputChangeHandler}
            label="Email"
            name="email"
            required
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="pwd">Password</InputLabel>
            <OutlinedInput
              id="pwd"
              value={data.password}
              onChange={inputChangeHandler}
              name="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
