import { Box, Text, Badge } from '@chakra-ui/react';
import ImportItems from '../Utils/ImportItems';
import { useEffect, useState } from 'react';
import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';

function Banner() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    let imgs = ImportItems(
      require.context('../Images', false, /\.(png|jpe?g|svg)$/)
    );
    let imgArr = Object.keys(imgs).map(item => imgs[item]);
    setImages([imgArr]);
  }, []);

  if (!images) {
    return <h1>Loading...</h1>;
  }

  return (
    <Box
      w={['100vw', '70vw', '65vw']}
      h={['17rem', '18rem', '20rem']}
      boxShadow="xl"
      borderRadius="lg"
      bg="gray.300"
      bgImage={images[0]}
      bgSize="cover"
      bgPos="center"
      display="flex"
      justifyContent={['center', 'center', 'center', 'start']}
      alignItems={['center', 'center', 'center', 'start']}
      flexDirection="column"
      pl={['0', '0', '0', '12']}
      pt={['0', '0', '0', '8']}
    >
      <Box
        display="flex"
        flexDirection="column"
        bgColor="whiteAlpha.500"
        w={['13rem', '15rem']}
        h={['12rem']}
        justifyContent="space-around"
        alignItems="center"
        p={3}
        borderRadius={12}
        boxShadow="lg"
      >
        <Text fontSize="2xl">New York</Text>
        <Text fontSize="6xl">28&#8451; </Text>
        <Badge colorScheme="blue" w="max-content" borderRadius={5}>
          Cloudy
        </Badge>
      </Box>
      <Box
        display="flex"
        w={['13rem', '15rem']}
        mt={2}
        alignItems="center"
        justifyContent="space-around"
      >
        <Box display="flex" alignItems="center">
          <TriangleUpIcon />
          <Text fontSize="xl">13&#8451;</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <TriangleDownIcon />
          <Text fontSize="xl">31&#8451;</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
