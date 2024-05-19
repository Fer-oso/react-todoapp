import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import { ChangesHistory } from "./ChangesHistory";
import { useSelector } from "react-redux";
import { NothingSelected } from "../NothingSelected";
import { Title } from "../Title";
import { ImageGallery } from "../ImageGallery";

export const TaskInformation = () => {
  const { subtaskSelected, listSubtasks } = useSelector((state) => state.tasks);

  return (
    <Container sx={{ borderRight: " 2px solid #F1F1F1", marginTop: 1 }}>
      <Divider>
        <Title title={"Subtask description"} variant="subtitle2" />
      </Divider>

      {!!listSubtasks && listSubtasks.length > 0 ? (
        <>
          {!!subtaskSelected ? (
            <>
              
              <Typography variant="subtitle2">
                {subtaskSelected.description}
              </Typography>

              <ImageGallery images = {subtaskSelected.images}/>

              <Typography
                marginTop={2}
                variant="body1"
                color={"black"}
                fontWeight={"fontWeightBold"}
              >
                Changes history
              </Typography>

          

              <ChangesHistory />
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
