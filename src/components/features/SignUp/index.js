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
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
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
    console.log(data);
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
            Sign up
          </Typography>
          <TextField
            value={data.name}
            onChange={inputChangeHandler}
            label="Full Name"
            name="name"
            required
          />
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
            Sign up
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignUp;
