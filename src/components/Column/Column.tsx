import React from "react";
import { useSelector } from "react-redux";
import { getCardInEditingId, getStatusEditing } from "../../redux/selectors";
import { ICard, STATUS } from "../../constants/types";
import { getStatusValue } from "../../utils/getStatusValue";
import { Card } from "../Card/Card";
import { AddCardButton } from "../AddCardButton/AddCardButton";
import { EditableCard } from "../EditableCard/EditableCard";
import { DroppingArea } from "../DroppingArea/DroppingArea";
import { CardsContainer, ColumnStyled, Title } from "./Column.styled";

type Props = {
  status: string | keyof typeof STATUS;
  data: ICard[];
  isCardAdding: boolean;
  draggingCard: string;
  setDraggingCard: React.Dispatch<React.SetStateAction<string>>;
  onDrop: (
    status: keyof typeof STATUS,
    index: number,
    draggingCard: string
  ) => void;
  toggleStatusAdding: () => void;
  openAdding: () => void;
};

export const Column: React.FC<Props> = ({
  status,
  data,
  isCardAdding,
  draggingCard,
  setDraggingCard,
  onDrop,
  toggleStatusAdding,
  openAdding,
}) => {
  const editingCardId = useSelector(getCardInEditingId);
  const statusEditing = useSelector(getStatusEditing);

  const statusValue = getStatusValue(status);

  return (
    <>
      {data && (
        <ColumnStyled>
          <Title>{status}</Title>
          <div>{data.length}</div>
          <CardsContainer>
            <DroppingArea
              key={`${status}-start`}
              onDrop={() => onDrop(statusValue, 1, draggingCard)}
            />
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {!editingCardId || editingCardId !== item.id ? (
                  <React.Fragment key={`${item.id}-card-wrapper`}>
                    <Card
                      key={`${item.id}-card`}
                      cardData={item}
                      toggleStatusAdding={toggleStatusAdding}
                      draggingCard={draggingCard}
                      setDraggingCard={setDraggingCard}
                    />
                    <DroppingArea
                      key={`${item.id}-dropping`}
                      onDrop={() =>
                        onDrop(statusValue, item.order + 1, draggingCard)
                      }
                    />
                  </React.Fragment>
                ) : (
                  <EditableCard
                    key={`${item.id}-editable`}
                    status={status}
                    order={item.order}
                  />
                )}
              </React.Fragment>
            ))}
            {statusEditing !== statusValue && (
              <AddCardButton
                key="add-card-button"
                status={status as STATUS}
                openAdding={openAdding}
              />
            )}
            {isCardAdding &&
              !editingCardId &&
              statusEditing === statusValue && (
                <EditableCard
                  key="new-editable-card"
                  toggleStatusAdding={toggleStatusAdding}
                  status={status}
                  order={data.length + 1}
                />
              )}
          </CardsContainer>
        </ColumnStyled>
      )}
    </>
  );
};
