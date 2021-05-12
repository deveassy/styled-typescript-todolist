import React, { ReactElement } from "react";
import styled from "styled-components";

type HeaderText = { children: string };

// 화살표 함수 사용할 경우
// const TodoHeader = ({children} : HeaderText) => {
//   return <HeaderContainer>{children}</HeaderContainer>;
// };

function TodoHeader({ children }: HeaderText) {
  return <HeaderContainer>{children}</HeaderContainer>;
}

const HeaderContainer = styled.h1`
  color: #eb5e0b;
`;

export default TodoHeader;
