import "./App.css";

import { ChakraProvider, chakra } from "@chakra-ui/react";
import { Button, ButtonGroup, Box } from "@chakra-ui/react";

const Card = chakra("button", {
  baseStyle: {
    shadow: "lg",
    rounded: "lg",
    bg: "white",
  },
});

function App() {
  return (
    <div>
      <ChakraProvider>
        <h1>Cheese</h1>
        <Card>Butt</Card>
        <Button opacity="0.5" bg="tomato">
          Button
        </Button>
        <chakra.button
          px="3"
          py="2"
          bg="green.200"
          rounded="md"
          _hover={{ bg: "green.300" }}
        >
          Click me
        </chakra.button>
        <Box
          w="100%"
          h="200px"
          bgGradient="radial(gray.300,yellow.400,pink.200)"
        />
      </ChakraProvider>
    </div>
  );
}

export default App;
