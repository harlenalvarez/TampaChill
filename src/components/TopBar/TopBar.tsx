import { AppBar, Container, Toolbar, Typography, Link,styled, SxProps } from '@mui/material';
import { Logo } from '../logo/Logo';

const logoPosition: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  width: '55px',
  height: '55px',
  position: 'absolute',
  zIndex: 1,
  top: { xs: 0, sm: '20px' },
  left: 0,
  right: 0,
  margin: '0 auto',
  boxShadow: 2,
  borderRadius: '50%'
}
const PositionedLogo = styled('div')();
export const TopBar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'white', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flex: 1 }}
          >
            Tampa Chill
          </Typography>
          <PositionedLogo sx={logoPosition}>
            <Logo />
          </PositionedLogo>
          <Link underline='none' component='button' color='black' href='tel:8134247049'>
            <Typography>813-424-7049</Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}