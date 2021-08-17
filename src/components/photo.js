import { Avatar, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  photocontainer: {
    display: "flex",
    gap: 8,
  },
}));

export const Photo = ({ title, url, thumbnailUrl }) => {
  const classes = useStyles();

  const randomNumber = Math.floor(Math.random() * (250 - 50) + 50);

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={2}
    >
      <Box className={classes.photocontainer}>
        <Avatar src={thumbnailUrl} alt={title} variant="square" />
        <Box display="flex" flexDirection="column">
          <Typography variant="h4">{title}</Typography>
          <a href={url}>
            <Typography variant="body1">{url}</Typography>
          </a>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column">
        <Typography variant="h4" style={{ color: `${randomNumber > 75 ? "green" : "red"}`}}>$ {randomNumber}</Typography>
        <Typography variant="body1">10:00 AM</Typography>
      </Box>
    </Box>
  );
};
