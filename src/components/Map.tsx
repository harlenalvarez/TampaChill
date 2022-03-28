import { Box } from '@mui/material'

export const Map = () => {
  return (
    <Box sx={{height: '350px'}}>
      <iframe referrerPolicy='origin' title='service-locations' width='100%' height='100%' frameBorder="0" style={{ border: 0 }} src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDz5zc6TOFsVvVXG6gp3hhNqoAHq0SYA0g&q=tampabay&zoom=9" allowFullScreen />
    </Box>
  )
}