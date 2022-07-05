import React from 'react';
import { ChakraProvider, theme, Grid, Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './container/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box  bg="200" h='100vh'>
        <Grid>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Header />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
