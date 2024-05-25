import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  font-size: ${({ theme }) => theme.fontSizes.gigantic};
`;
