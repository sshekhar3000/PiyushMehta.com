import React from 'react';
import styled from '@xstyled/styled-components';

export const Container = styled.box`
  max-width: container-base;
  padding-left: 5;
  padding-right: 5;
  margin: 0 auto;
`;

export function PageContainer(props) {
  return <Container pt={{ xs: 120, md: 8 }} pb={5} {...props} />;
}
