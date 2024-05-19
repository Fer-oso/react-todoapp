import { ImageList, ImageListItem, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

export const ImageGallery = ({images} ) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <ImageList
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
        },
        height: "auto",
      }}

      rowHeight={"auto"}

      cols={isMobile ? 1 : 3}
    >
      {images.map((image) => (
        <ImageListItem
          key={image}
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "100%",
            },

          }}
        >
          <img srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} src={`${image}?w=164&h=164&fit=crop&auto=format`} alt={image} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};