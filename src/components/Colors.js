import { Box, Badge } from '@chakra-ui/react';
import React, { useState } from 'react';

function Colors({ colors }) {
  const [selected, setSelected] = useState(1000);
  console.log(colors);
  return (
    <Box display="flex" py={2}>
      {colors.map((color) => (
        <Badge
          key={color.code}
          mr="8px"
          px={2}
          py={1}
          bgColor={selected === color.code ? 'cyan.200' : 'gray.100'}
          onClick={() => setSelected(color.code)}
          cursor="pointer"
        >
          {color.name}
        </Badge>
      ))}
    </Box>
  );
}

export default Colors;
