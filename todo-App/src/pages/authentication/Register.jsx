import React from "react";
import {Link as LinkRouter} from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { Button, FormControl, Grid, Link, TextField, Typography } from "@mui/material";
import { useForm } from "../hooks/useForm";

import {useDispatch} from "react-redux";
import { startCreationUserWithEmailAndPassword } from "../../store/auth/authThunk";


import Swal from "sweetalert2";
import "@sweetalert2/theme-material-ui"

const formData = {
  name:"",
  email:"",
  password:""
}

export const Register = () => {

const {formState, onInputChange} = useForm(formData);

const {name, email, password} = formState;

const dispatch = useDispatch();

const onSubmit = (event) =>{

  event.preventDefault();

  Swal.fire({
    title: "Do you want to register this account?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Yes, create",
    denyButtonText: `Don't create`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      dispatch(startCreationUserWithEmailAndPassword({name,password,email}));
      Swal.fire("Created!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("account creation canceled", "", "info");
    }
  });
}
  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              type="text"
              placeholder="Write your name"
              fullWidth
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="Write your email"
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
              placeholder="Write your password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1, ml: 0 }}>
            <Grid item xs={12} sm={12}>
              <Button type="submit" variant="contained" fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{mr:1}}>You have already account?</Typography>
            <Link component={LinkRouter} color="inherit" to="/auth/login">Login</Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
