import { AppBar, Box, Grid2, Link, Toolbar, Typography } from '@mui/material'

function Homepage() {
  return (
    <Box>
      <AppBar
        position="relative"
        elevation={0}
        sx={{
          bgcolor: 'rgba(234,248,237,0.3)',
          borderBottom: '1px solid #e5eaef'
        }}
      >
        <Toolbar></Toolbar>
      </AppBar>
      <Box
        position="relative"
        overflow="hidden"
        bgcolor="rgba(234,248,237,0.3)"
        py={4}
      >
        <Box maxWidth={1264} ml={0} mr="auto" px={1.8}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="stretch"
            zIndex={1}
          >
            <Box maxWidth={530} mb={6} mr={0}>
              <Typography
                component="h1"
                fontSize="2.1em"
                fontWeight={800}
                color="#000"
                lineHeight="1.2em"
                letterSpacing="-0.01px"
                mb={2}
              >
                Luisa Fernanda Beltrán, Fisioterapia
              </Typography>
              <Typography
                component="p"
                maxWidth={466}
                lineHeight="28px"
                mb={4.8}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
                vulputate scelerisque mollis luctus risus nulla. Pharetra
                laoreet felis euismod et. Id bibendum.
              </Typography>
              <Box
                display="flex"
                maxWidth={530}
                flexDirection="column"
                mb={3.2}
              >
                <Link
                  href="#"
                  underline="none"
                  display="block"
                  mb={0.8}
                  py="16px"
                  bgcolor="#47cd70"
                  borderRadius={8}
                  textAlign="center"
                >
                  <Typography
                    fontSize="1em"
                    fontWeight={500}
                    lineHeight="1.125em"
                    color="#fff"
                  >
                    Agendar cita
                  </Typography>
                </Link>
                <Box width={18} height={18}></Box>
                <Link
                  href="#"
                  underline="none"
                  display="block"
                  mb={0.8}
                  py="16px"
                  border="1px solid #bdcfd4"
                  borderRadius={8}
                  textAlign="center"
                >
                  <Typography
                    fontSize="1em"
                    lineHeight="1.125em"
                    color="#0b252e"
                  >
                    Contáctame
                  </Typography>
                </Link>
              </Box>
              <img
                src="https://javierdelanuez.com/wp-content/uploads/2022/01/Fisioterapia.jpg"
                alt
                style={{ display: 'inline-block', maxWidth: '100%' }}
              />
            </Box>
          </Box>
          <Box
            position="absolute"
            height={200}
            left={0}
            top="auto"
            right={0}
            bottom={0}
            bgcolor="#112b24"
          ></Box>
        </Box>
      </Box>
      <Box py={4}>
        <Box maxWidth={1264} mr="auto" px={1.8}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="stretch"
            textAlign="left"
          >
            <Box maxWidth={504} mb={3.2} textAlign="left">
              <Typography
                component="h2"
                fontSize="1.4em"
                fontWeight={800}
                color="#000"
                lineHeight="1.3em"
                mb={1.6}
              >
                Servicios populares
              </Typography>
              <Typography
                component="p"
                fontSize={16}
                lineHeight="28px"
                textAlign="left"
                color="#55656a"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                orci, vel amet pulvinar posuere tristique. Tortor, nullam.
              </Typography>
            </Box>
            <Link
              href="#"
              underline="none"
              display="block"
              mb={0.8}
              py="16px"
              border="1px solid #bdcfd4"
              borderRadius={8}
              textAlign="center"
            >
              <Typography fontSize="1em" lineHeight="1.125em" color="#0b252e">
                Contáctame
              </Typography>
            </Link>
          </Box>
          <Grid2 container rowGap={6} columnGap={3.2} mt={4.8}>
            <Grid2 item xs={12}>
              <Link href="#" underline="none" maxWidth="100%">
                <img
                  src="https://img.freepik.com/free-vector/sports-physiotherapy-illustration_23-2150076880.jpg?semt=ais_hybrid"
                  alt
                  style={{
                    display: 'inline-block',
                    maxWidth: '100%',
                    verticalAlign: 'middle'
                  }}
                />
              </Link>
              <Link
                href="#"
                underline="none"
                display="inline-block"
                maxWidth="100%"
                mt={3.2}
                mb={1.6}
              >
                <Typography
                  component="h3"
                  fontSize="1.4em"
                  lineHeight="1.417em"
                  fontWeight={800}
                  color="#000"
                >
                  Primer servicio
                </Typography>
              </Link>
              <Typography component="p" lineHeight="28px" mb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                orci, vel amet pulvinar posuere tristique. Tortor, nullam.
              </Typography>
              <Link
                href="#"
                underline="none"
                position="relative"
                maxWidth="100%"
                overflow="hidden"
                fontSize="1em"
                lineHeight="1.125em"
                color="#000"
              >
                <Typography fontWeight={600}>Agendar cita</Typography>
              </Link>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Box>
  )
}

export default Homepage
