import React, { useContext } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { AppContext } from '../context/AppContext';

function Bread() {
  const { itemSelected, setItemSelected } = useContext(AppContext);
  return (
    <Breadcrumb spacing="8px" separator="/">
      <BreadcrumbItem>
        <BreadcrumbLink
          as={ReachLink}
          to="/"
          onClick={() => setItemSelected(null)}
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {itemSelected && (
        <BreadcrumbItem>
          <span>{itemSelected}</span>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
}

export default Bread;
