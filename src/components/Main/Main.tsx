import React from "react";
import { MainContentContainer, MainStyled } from "./Main.styled";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { Board } from "../Board/Board";
import { LastBoardsList } from "../LastBoardsList/LastBoardsList";

export const Main: React.FC = () => {
  return (
    <MainStyled>
      <ControlPanel />
      <MainContentContainer>
        <Board />
        <LastBoardsList />
      </MainContentContainer>
    </MainStyled>
  );
};
