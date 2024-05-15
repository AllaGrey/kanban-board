import React from "react";
import { ControlButton, ControlPanelStyled } from "./ControlPanel.styled";
import { SearchBar } from "../SearchBar/SearchBar";

export const ControlPanel: React.FC = () => {
  return (
    <ControlPanelStyled>
      <SearchBar />
      <ControlButton $buttonType={"add"}>Add new board</ControlButton>
      <ControlButton $buttonType={"delete"}>Delete board</ControlButton>
    </ControlPanelStyled>
  );
};
