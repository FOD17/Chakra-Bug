import AspRatio from './section/03-Layout/01-AspectRatio/AspRatio'
import Bx from './section/03-Layout/02-Box/Bx'

import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <Bx />
    </ChakraProvider>
  );
}

export default App;
