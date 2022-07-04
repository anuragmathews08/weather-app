import {Box, Button, Collapse, useDisclosure} from "@chakra-ui/react";

function Details() {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box mt={4}>
            <Button onClick={onToggle}>{!isOpen ? "Show Details" : "Hide Details"}</Button>
            <Collapse in={isOpen} animateOpacity>
                <Box>
                    <h1>This is Collapse test</h1>
                </Box>
            </Collapse>
        </Box>
    );
}

export default  Details;