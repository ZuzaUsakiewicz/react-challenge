import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function Button({ children, startIcon, endIcon, handleClick, ...args }) {
  return (
    <MuiButton
      {...args}
      disableRipple
      startIcon={startIcon && <AddIcon />}
      endIcon={endIcon && <ArrowForwardIosIcon />}
      onClick={handleClick}
    >
      {children}
    </MuiButton>
  );
}
