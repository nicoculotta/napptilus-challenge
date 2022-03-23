import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

function Header() {
  return (
    <>
      <div>Logo</div>
      <Breadcrumb spacing="8px" separator="-">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Detail Link</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}

export default Header;
