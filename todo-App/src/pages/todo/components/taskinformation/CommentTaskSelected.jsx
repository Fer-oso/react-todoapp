import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Title } from "../Title";

export const CommentTaskSelected = () => {
  return (
    <Container sx={{ marginTop: { xs: "10px", xl: "0px" } }}>
      <Title title={"Write comment"} variant="body1" />
      <Divider></Divider>
      <Grid>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="standard-required"
                label="Title"
                placeholder="write one title for the task"
                variant="standard"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Write your changes / comments"
                multiline
                rows={5}
                fullWidth
                placeholder="Write your changes / comments"
                size="small"
              />
            </Grid>
          </Grid>

          <Grid container sx={{ mb: 2, mt: 1, ml: 0 }}>
            <Grid item xs={12} md={6}>
              <Button variant="contained" fullWidth>
                <Typography variant="body1" fontWeight={"fontWeightBold"}>
                  Public changes
                </Typography>
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Button variant="contained" fullWidth>
                <Typography variant="body1" fontWeight={"fontWeightBold"}>
                  Public comment
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};
