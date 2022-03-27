
import { Box, Typography } from '@mui/material';
import { TopBar } from '../components/TopBar/TopBar';
import { TopHeader } from '../components/TopHeader';
import { Services } from '../components/Services';
import { Middle } from '../components/Middle';
import { FacebookPage } from '../components/FacebookPage';
import { Map } from '../components/Map';

export const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor:'#f1f1f1' }}>
      <TopBar />
      <TopHeader />
      <Services />
      <Middle />
      <FacebookPage />
      <Map />
      <Box sx={{backgroundColor: 'white'}}>
        <Typography variant='caption' component='footer' color='textSecondary' align='center'>
            &copy; Tampa Chill created by Unstable Studios &trade;
        </Typography>
      </Box>
    </Box>
  )
}