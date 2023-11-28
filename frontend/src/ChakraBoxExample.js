import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ChakraBoxExample = () => {
  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
    >
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        Chakra Box Example
      </Text>
      <Text>
        This is an example of using the Box component from Chakra UI. You can
        add various styles and properties to create custom components.
      </Text>
    </Box>
  );
};

export default ChakraBoxExample;
