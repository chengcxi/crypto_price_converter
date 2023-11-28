import { Box, Heading, Button } from '@chakra-ui/react';

function MyComponent() {
  return (
    <Box p={4} bg="gray.100">
      <Heading size="lg">Welcome to Chakra UI!</Heading>
      <Button colorScheme="blue">Click me</Button>
    </Box>
  );
}

export default MyComponent;
