import { Box, Typography } from '@mui/material';
import ErrorImage from '../../assets/unknown_error.png';
import { ImageWithInfo } from './ImageWithInfo';

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {error?.message?.includes('Network Error') ? (
        <Typography>Uruchom Server!</Typography>
      ) : (
        <ImageWithInfo
          imageText="Wystąpił błąd techniczny"
          imageSource={ErrorImage}
        />
      )}
    </Box>
  );
};
