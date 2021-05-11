import React, { ReactElement } from "react";
import styled from "styled-components";

const Footer = (): ReactElement => {
  return <StyledFooter>Footer</StyledFooter>;
};

const StyledFooter = styled.div`
  background-color: ${(props): string => {
    return `${props.theme.color.main}`;
  }};
`;

export default Footer;
