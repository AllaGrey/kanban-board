import styled from "styled-components";

export const AddCardBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  stroke: ${({ theme }) => theme.colors.successColor};
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.colors.successColor};

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

export const ButtonText = styled.span`
  line-height: 1.6;
`;
