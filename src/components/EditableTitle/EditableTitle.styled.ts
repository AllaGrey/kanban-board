import styled from "styled-components";

export const EditableTitleContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TitleInput = styled.input`
  width: 300px;
  border-radius: 5px;
  border: none;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const ControlContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

type ButtonProps = {
  $buttonType?: "save" | "cancel";
};

export const ControlButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100px;
  border: 2px solid
    ${({ $buttonType, theme }) =>
      $buttonType && $buttonType === "save"
        ? theme.colors.successColor
        : theme.colors.accentColor};
  border-radius: 5px;
  color: ${({ $buttonType, theme }) =>
    $buttonType && $buttonType === "save"
      ? theme.colors.successColor
      : theme.colors.accentColor};
  box-shadow: ${({ theme }) => theme.boxShadow.btn};
  transition: ${({ theme }) => theme.transition};

  &:hover,
  &:focus {
    background-color: ${({ $buttonType, theme }) =>
      $buttonType && $buttonType === "save"
        ? theme.colors.successColor
        : theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.textColor};
  }
`;
