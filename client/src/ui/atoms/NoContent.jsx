import { Box } from '@mui/material';
import NoContentImage from '../../assets/no_content.png';
import { ImageWithInfo } from './ImageWithInfo';

export const NoContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <ImageWithInfo
        imageText="Brak danych do wyświetlenia"
        imageSource={NoContentImage}
      />
    </Box>
  );
};
