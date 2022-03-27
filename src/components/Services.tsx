import { Card, CardActionArea, CardMedia, CardContent, Typography, SxProps, Container, Grid } from "@mui/material";
import IMG from './images/acinstallation.webp';
import SERVICE_IMG from './images/acservice.webp'
import INSULATION_IMG from './images/insulation.webp'

const services: SxProps = {
  width: '345px',
  marginBottom: '1.5vh'
}

const serviceImg: SxProps = {
  height: '140px'
}

const ServiceCard = ({ title, image }: any): JSX.Element => (
  <Card sx={services}>
    <CardActionArea>
      <CardMedia sx={serviceImg} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2' align='center'>
          {title}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export const Services = () => {
  return (
    <Container>
      <Grid sx={{ padding: 4 }} container justifyContent='space-around'>
        <ServiceCard title='Installation' image={IMG} />
        <ServiceCard title='Service and Repair' image={SERVICE_IMG} />
        <ServiceCard title='Insulation' image={INSULATION_IMG} />
      </Grid>
    </Container>
  )
}