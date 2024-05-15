import styled from "styled-components";

export const SearchButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.textColor};
  box-shadow: ${({ theme }) => theme.boxShadow.btn};
  border-radius: 5px;
  transition: ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;
