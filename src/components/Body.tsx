import React, { ReactElement } from "react";
import styled from "styled-components";

const Body = (): ReactElement => {
  return <StyledBody>Body</StyledBody>;
};

const StyledBody = styled.div`
  background-color: ${(props): string => {
    return `${props.theme.color.sub}`;
  }};
`;

export default Body;
