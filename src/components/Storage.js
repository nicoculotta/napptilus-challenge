import { Box, Badge } from '@chakra-ui/react';
import React, { useState } from 'react';

function Storage({ storage }) {
  const [selected, setSelected] = useState(2000);
  return (
    <Box display="flex" py={2}>
      {storage.map((store) => (
        <Badge
          key={store.code}
          mr="8px"
          px={2}
          py={1}
          bgColor={selected === store.code ? 'cyan.200' : 'gray.100'}
          onClick={() => setSelected(store.code)}
        >
          {store.name}
        </Badge>
      ))}
    </Box>
  );
}

export default Storage;
