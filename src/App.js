import {
  ChakraProvider,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from '@chakra-ui/icons';
import React from 'react';
import bernie from './images/Bernie-1.jpg';

function App() {
  return (
    <ChakraProvider>
      <Box height="100px" />
      <Slider
        aria-label="slider-ex-1"
        defaultValue={30}
        step={5}
        min={0}
        max={120}
        //onChangeEnd={(value) => alert(value)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </ChakraProvider>
  );
}

export default App;
