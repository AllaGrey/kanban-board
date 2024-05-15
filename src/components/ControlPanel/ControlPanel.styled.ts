import styled from "styled-components";

export const ControlPanelStyled = styled.div`
  display: flex;
  gap: 20px;
  height: fit-content;
`;

type ButtonProps = {
  $buttonType?: "add" | "delete";
};

export const ControlButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100px;
  border: 2px solid
    ${({ $buttonType, theme }) =>
      $buttonType && $buttonType === "add"
        ? theme.colors.successColor
        : theme.colors.accentColor};
  border-radius: 5px;
  color: ${({ $buttonType, theme }) =>
    $buttonType && $buttonType === "add"
      ? theme.colors.successColor
      : theme.colors.accentColor};
  box-shadow: ${({ theme }) => theme.boxShadow.btn};
  transition: ${({ theme }) => theme.transition};

  &:hover,
  &:focus {
    background-color: ${({ $buttonType, theme }) =>
      $buttonType && $buttonType === "add"
        ? theme.colors.successColor
        : theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.textColor};
  }
`;
