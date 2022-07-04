import Banner from '../components/Banner';
import Details from '../components/Details';
import {Box} from "@chakra-ui/react";

function Header() {
  return (
    <Box display="flex" w={['100%','80%','70%']} flexDirection="column" justifyContent="center" alignItems="center" m="auto">
      <Banner />
      <Details />
    </Box>
  );
}

export default Header;
