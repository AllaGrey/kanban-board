import styled from "styled-components";

type DropAreaContainerProps = {
  $isShown: boolean;
};

export const DropAreaContainer = styled.div<DropAreaContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ $isShown }) => ($isShown ? "70px" : "10px")};
  border-radius: 5px;
  border: 1px dashed ${({ theme }) => theme.colors.secondaryColor};
  opacity: ${({ $isShown }) => ($isShown ? 1 : 0)};
  transition: all ${({ theme }) => theme.transition};
`;
