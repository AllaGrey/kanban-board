import styled from "styled-components";

type CardContainerProps = {
  $dragging: boolean;
};

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  border: 1px solid
    ${({ theme, $dragging }) =>
      $dragging ? theme.colors.textColor : theme.colors.secondaryColor};
  opacity: ${({ $dragging }) => ($dragging ? 0.5 : 1.0)};
  width: 100%;
  align-items: center;
  transition: ${({ theme }) => theme.transition};
  cursor: grab;
  position: relative;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.cardHover};
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;

export const CardTitle = styled.h4`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
`;

export const ControlButtons = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  gap: 5px;
`;

export const Button = styled.button`
  stroke: ${({ theme }) => theme.colors.textColor};
  transition: ${({ theme }) => theme.transition};

  &:hover,
  &:focus > svg {
    stroke: ${({ theme }) => theme.colors.secondaryTextColor};
  }
`;
