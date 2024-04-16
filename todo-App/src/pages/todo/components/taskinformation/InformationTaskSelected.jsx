import { List } from "@mui/material";
import React from "react";
import { ChangeHistoryComments } from "./ChangeHistoryComments";

export const InformationTaskSelected = () => {
  return (
    <List
      sx={{
        overflow: "auto",
        position: "relative",
        maxHeight: { xs: 200, md: 350, lg: 350, xl: 830 },
        marginTop:2,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      <ChangeHistoryComments/>
    </List>
  );
};
