import { List } from "@mui/material";
import React from "react";
import { ChangeHistoryComments } from "./ChangeHistoryComments";
import { NothingSelected } from "../NothingSelected";
import { useSelector } from "react-redux";

export const ChangesHistory = () => {

  const { subtaskSelected } = useSelector((state) => state.tasks);
  
  return (
    <>
      {subtaskSelected.changes > 0 ? (
        <List
          sx={{
            overflow: "auto",
            position: "relative",
            maxHeight: { xs: 200, md: 350, lg: 350, xl: 830 },
            marginTop: 2,
            "& ul": { padding: 0 },
          }}
          subheader={<li />}
        >
          <ChangeHistoryComments />
        </List>
      ) : (
        <NothingSelected title="No changes" />
      )}
    </>
  );
};
