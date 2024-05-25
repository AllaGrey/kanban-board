import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addNewBoard, deleteBoardById } from "../../redux/operations";
import { getCurrentBoardId } from "../../redux/selectors";
import { SearchBar } from "../SearchBar/SearchBar";
import { ControlButton, ControlPanelStyled } from "./ControlPanel.styled";

export const ControlPanel: React.FC = () => {
  const boardId = useSelector(getCurrentBoardId);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddBoard = async () => {
    try {
      await dispatch(addNewBoard("New board")).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteBoard = () => {
    if (!boardId) return;
    dispatch(deleteBoardById(boardId));
  };
  return (
    <ControlPanelStyled>
      <SearchBar />
      <ControlButton $buttonType={"add"} type="button" onClick={handleAddBoard}>
        Add new board
      </ControlButton>
      <ControlButton
        $buttonType={"delete"}
        type="button"
        onClick={handleDeleteBoard}
      >
        Delete board
      </ControlButton>
    </ControlPanelStyled>
  );
};
