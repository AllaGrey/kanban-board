import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentBoard } from "../../redux/selectors";
import { AppDispatch } from "../../redux/store";
import { updateCardOrder } from "../../redux/operations";
import { getCardsToUpdate } from "../../utils/getCardsToUpdate";
import { ICard, STATUS } from "../../constants/types";
import { EditableTitle } from "../EditableTitle/EditableTitle";
import { Icon } from "../../shared/Icon/Icon";
import { Column } from "../Column/Column";
import { BoardStyled, Button, TitleContainer } from "./Board.styled";

export const Board: React.FC = () => {
  const [isCardAdding, setIsCardAdding] = useState<boolean>(false);
  const [draggingCard, setDraggingCard] = useState<string>("");
  const [isEditingTitle, setEditingTitle] = useState<boolean>(false);

  const board = useSelector(getCurrentBoard);

  const dispatch = useDispatch<AppDispatch>();

  const toggleStatusAdding = () => setIsCardAdding(!isCardAdding);
  const openAdding = () => setIsCardAdding(true);
  const toggleEditingTitle = () => setEditingTitle(!isEditingTitle);

  const onDrop = (
    status: keyof typeof STATUS,
    position: number,
    draggingCard: string
  ) => {
    console.log(
      `Card ${draggingCard} moves to position ${position} with status ${status}`
    );

    const columns = { ...board.cards };
    const cardsToUpdate = getCardsToUpdate(
      status,
      position,
      draggingCard,
      columns
    ) as ICard[];
    console.log(cardsToUpdate);
    dispatch(updateCardOrder(cardsToUpdate));
  };

  console.log(draggingCard);

  return (
    <>
      {board?.id ? (
        <>
          {isEditingTitle ? (
            <EditableTitle
              boardTitle={board.title}
              boardId={board.id}
              toggleEditingTitle={toggleEditingTitle}
            />
          ) : (
            <TitleContainer>
              <h2>{board.title}</h2>
              <Button onClick={toggleEditingTitle}>
                <Icon
                  iconName="update"
                  width={20}
                  height={20}
                  stroke="inherit"
                  fill="inherit"
                />
              </Button>
            </TitleContainer>
          )}
          <BoardStyled>
            {Object.entries(board.cards).map(([status, tasks], index) => {
              return (
                <Column
                  key={status + index}
                  status={STATUS[status as keyof typeof STATUS]}
                  data={tasks}
                  isCardAdding={isCardAdding}
                  toggleStatusAdding={toggleStatusAdding}
                  openAdding={openAdding}
                  draggingCard={draggingCard}
                  setDraggingCard={setDraggingCard}
                  onDrop={onDrop}
                />
              );
            })}
          </BoardStyled>
        </>
      ) : (
        <p>Select a board or create new</p>
      )}
    </>
  );
};
