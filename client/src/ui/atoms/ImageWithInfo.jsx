import { Typography } from '@mui/material';

export const ImageWithInfo = ({ imageSource, imageText }) => {
  return (
    <>
      <img src={imageSource} alt="error illustration" />
      <Typography
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: '400',
          fontSize: '19.2px',
          color: `#33333380`,
          lineHeight: '29px',
        }}
      >
        {imageText}
      </Typography>
    </>
  );
};
