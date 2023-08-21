import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/forgot", {
        email,
      });
      navigate("/otp");
      console.log(response.data); // Handle the response
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 3,
  };
  return (
    <Box sx={style}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Please Enter Your Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={handleEmailChange}
      />
      <Button
        variant="contained"
        sx={{ minWidth: 120, m: 1 }}
        onClick={handleResetPassword}
      >
        Sent
      </Button>
      <Link href="/" variant="body2">
        <Button variant="contained">Back to Login</Button>
      </Link>
    </Box>
  );
};

export default ForgotPassword;
