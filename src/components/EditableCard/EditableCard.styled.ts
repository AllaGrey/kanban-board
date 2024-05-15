import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
  width: 100%;
  align-items: center;
  transition: ${({ theme }) => theme.transition};
`;

export const TitleInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: none;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const DescriptionInput = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: none;
  resize: none;
  min-height: 100px;
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
