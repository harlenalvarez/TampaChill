import { Parallax } from 'react-parallax';
import { Typography, Grid, SxProps } from '@mui/material';
import IMG from './images/sweating.webp';
import { rootText } from './sharedSxProps';

const parallaxGrid: SxProps = {
  padding: '5px 10px',
  height: { xs: '300px', md: '500px'}
}

export const TopHeader = () => {
  return (
    <Parallax blur={0} bgImageSizes='height: 300px' bgImage={IMG} bgImageAlt='Image of woman using a hand fan to cool off' strength={300}>
      <Grid container alignItems='center' direction='column'sx={parallaxGrid}>
        <Typography variant='h3' align='center' color='white' sx={{flexGrow:1, ...rootText }}>
          Best AC service in the Tampa Bay Area
        </Typography>
        <Typography variant='h6' align='center' color='white' sx={rootText}>
          Hablamos español
        </Typography>
      </Grid>
    </Parallax>
  )
}