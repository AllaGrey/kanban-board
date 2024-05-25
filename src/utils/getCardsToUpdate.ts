import { ICard, STATUS } from "../constants/types";

export const getCardsToUpdate = (
  status: keyof typeof STATUS,
  position: number,
  draggingCardId: string,
  columns: { [column: string]: ICard[] }
): ICard[] | undefined => {
  const updatedCards: ICard[] = [];
  let draggingCard: ICard | undefined;

  // find and delete card
  for (const columnKey in columns) {
    const column = columns[columnKey].map((card) => ({ ...card }));
    const cardIndex = column.findIndex((card) => card.id === draggingCardId);
    if (cardIndex !== -1) {
      draggingCard = column.splice(cardIndex, 1)[0];

      // update position of other cards in the column
      for (let i = cardIndex; i < column.length; i++) {
        column[i].order -= 1;
        updatedCards.push(column[i]);
      }

      columns[columnKey] = column;
      break;
    }
  }

  if (!draggingCard) {
    console.log("Card not found");
    return;
  }

  if (!columns[status]) {
    columns[status] = [];
  }

  const targetColumn = columns[status].map((card) => ({ ...card }));

  // replace to other column
  for (let i = position - 1; i < targetColumn.length; i++) {
    targetColumn[i].order += 1;
    updatedCards.push(targetColumn[i]);
  }

  // update dragging card
  draggingCard = { ...draggingCard, status: status, order: position };
  updatedCards.push(draggingCard);

  // add dragging card to new place
  targetColumn.splice(position - 1, 0, draggingCard);
  columns[status] = targetColumn;

  return updatedCards;
};
