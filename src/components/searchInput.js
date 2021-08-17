import { Box, InputBase, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  inputStyles: {
    padding: theme.spacing(1, 2),
    background: "#EEE5FF",
    color: "#7F3DFF",
    width: "100%",
    borderRadius: "8px",
    fontSize: theme.typography.h4,
  },
}));

export const SearchInput = ({ getInputValue }) => {
  const classes = useStyles();
  
  const handleChange = (event) => {
      getInputValue(event.target.value);
  }
  return (
    <Box mb={2}>
      <InputBase
        placeholder="See your financial reports"
        className={classes.inputStyles}
        onChange={handleChange}
      />
    </Box>
  );
};
