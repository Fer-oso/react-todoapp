import { Container, Typography } from "@mui/material";
import React from "react";
import { ChangesHistory } from "./ChangesHistory";
import { useSelector } from "react-redux";
import { NothingSelected } from "../NothingSelected";

export const TaskInformation = () => {
  const { subtaskSelected, listSubtasks } = useSelector((state) => state.tasks);

  return (
    <Container sx={{ marginTop: { xs: "10px", md: "0px", xl: "0px" } }}>
      {listSubtasks.length > 0 ? (
        <>
          {!!subtaskSelected ? (
            <>
              <Typography
                variant="body1"
                color={"black"}
                fontWeight={"fontWeightBold"}
                textAlign={"center"}
              >
                Description
              </Typography>

              <Typography variant="body2">
                {subtaskSelected.description}
              </Typography>

              <Typography
                marginTop={2}
                variant="body1"
                color={"black"}
                fontWeight={"fontWeightBold"}
              >
                Changes history
              </Typography>

              <ChangesHistory  />
            </>
          ) : (
            <>
              <NothingSelected title="Select one subtask" />
            </>
          )}
        </>
      ) : (
        <>
          <NothingSelected title="You not have Subtasks, create one" />
        </>
      )}
    </Container>
  );
};
