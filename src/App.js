import React from 'react';
import { ChakraProvider, theme, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './container/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Header />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
