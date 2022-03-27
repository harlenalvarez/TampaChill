import { Typography, Box } from '@mui/material'
//@ts-ignore
import { FacebookProvider, Page } from 'react-facebook';

export const FacebookPage = () => {
  return (
    <Box flexDirection='column' justifyContent='center' alignItems='center' justifyItems='center' sx={{ display: 'flex', margin: '5px 0' }}>
      <Typography variant='h5' component='h5'>
        Contact us in facebook
      </Typography>
      <br />
      <FacebookProvider appId='2657476431139548'>
        <Page href="https://www.facebook.com/Air-conditioning-services-repair-installation-101098351478983/" />
      </FacebookProvider>
    </Box>
  )
}