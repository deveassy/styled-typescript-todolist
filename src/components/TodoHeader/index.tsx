import React from "react";
import styled from "styled-components";

type HeaderText = { children: string };

// 화살표 함수 사용할 경우
// const TodoHeader = ({children} : HeaderText) => {
//   return <HeaderContainer>{children}</HeaderContainer>;
// };

function TodoHeader({ children }: HeaderText) {
  return <HeaderContainer>{children}</HeaderContainer>;
}

const HeaderContainer = styled.div`
  font-size: 50px;
  font-weight: 800;
  color: #fff;
`;

export default TodoHeader;
