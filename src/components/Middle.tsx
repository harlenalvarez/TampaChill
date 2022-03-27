import { Grid, Typography, SxProps } from '@mui/material'
import { Parallax } from 'react-parallax'
import IMG from './images/acunit.jpg'
import { rootText } from './sharedSxProps'

const parallaxStyle: SxProps = {
  padding: '5px 10px',
  height: { xs: '150px', md: '250px'}
}

export const Middle = () => {
  return (
    <Parallax blur={0} bgImage={IMG} bgImageAlt='' strength={300}>
      <Grid container sx={parallaxStyle} alignItems='center' justifyItems='center' justifyContent='center' direction='column'>
        <Typography variant='h2' sx={rootText} align='center' component='h2'>
          We Finance!
        </Typography>
      </Grid>
    </Parallax>
  )
}