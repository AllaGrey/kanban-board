import styled from "styled-components";

export const BoardStyled = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
  gap: 15px;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 10px;
`;

export const BoardTitle = styled.h2`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  stroke: ${({ theme }) => theme.colors.textColor};
  transition: ${({ theme }) => theme.transition};

  &:hover,
  &:focus > svg {
    stroke: ${({ theme }) => theme.colors.secondaryTextColor};
  }
`;
