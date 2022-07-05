import {
  Box,
  Button,
  Collapse,
  useDisclosure,
  Heading,
} from '@chakra-ui/react';

function Details() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box mt={4}>
      <Button
        onClick={onToggle}
        w={['100vw', '70vw', '65vw']}
        border="1px"
        borderColor="gray.200"
      >
        {!isOpen ? 'Show Details' : 'Hide Details'}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          w={['100vw', '70vw', '65vw']}
          h={['7rem', '9rem', '11rem']}
          pt={2}
          display="flex"
          justifyContent="center"
        >
          <Box
            w={['100%', '80%']}
            h="6rem"
            boxShadow="lg"
            borderRadius="lg"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            border="1px"
            borderColor="gray.100"
          >
            <Box
              w="33%"
              h="80%"
              borderRight="1px"
              borderColor="gray.200"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent='space-evenly'
            >
              <Heading as="h6" size="sm" color="blackAlpha.500">
                Wind
              </Heading>
              <Heading as="h6" size="md">
                32km/h
              </Heading>
            </Box>
            <Box
              w="33%"
              h="80%"
              borderRight="1px"
              borderColor="gray.200"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent='space-evenly'
            >
              <Heading as="h6" size="sm" color="blackAlpha.500">
                Humidity
              </Heading>
              <Heading as="h6" size="md">
                23 km
              </Heading>
            </Box>
            <Box
              w="33%"
              h="80%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent='space-evenly'
            >
              <Heading as="h6" size="sm" color="blackAlpha.500">
                Visibility
              </Heading>
              <Heading as="h6" size="md">
                64%
              </Heading>
            </Box>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}

export default Details;
