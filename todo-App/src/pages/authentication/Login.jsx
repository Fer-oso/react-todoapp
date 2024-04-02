import {
  Button,
  FormControl,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import { AuthLayout } from "./layouts/AuthLayout";
import { Google } from "@mui/icons-material";
import { Link as LinkRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLoginUserwithEmailAndPassword } from "../../store/auth/authThunk";
import { useForm } from "../hooks/useForm";

const formData = {
  email: "",
  password: "",
};

export const Login = () => {

  const {status } = useSelector(state => state.authentication);

  const {formState,onInputChange} = useForm(formData);

  const {email, password} = formState;

  const dispatch = useDispatch();

  const isAuthenticated = useMemo(()=> status === "checking user credentials", [status])

  const onClickRegisterButton = (event) => {
    event.preventDefault();
    dispatch(startLoginUserwithEmailAndPassword({email,password}));
  };

  const onClickCloseConection = (event) => {
    event.preventDefault();
  };

  return (
    <AuthLayout title="Login">
      <FormControl>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                placeholder="email@email.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                placeholder="****"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1, ml: 0 }}>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={onClickRegisterButton}
                  disabled={isAuthenticated}
                >
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={onClickCloseConection}
                  disabled={isAuthenticated}
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={LinkRouter} color="inherit" to="/auth/register">
                Create account
              </Link>
            </Grid>
          </Grid>
        </form>
      </FormControl>
    </AuthLayout>
  );
};
