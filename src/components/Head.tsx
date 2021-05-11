import React, { ReactElement } from "react";
import styled from "styled-components";

const Head = (): ReactElement => {
  return <StyledHead>Head</StyledHead>;
};

const StyledHead = styled.div`
  background-color: ${(props): string => {
    return `${props.theme.color.main}`;
  }};
`;

export default Head;
