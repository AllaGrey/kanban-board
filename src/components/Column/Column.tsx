import React, { useState } from "react";
import { CardsContainer, ColumnStyled, Title } from "./Column.styled";
import { Card } from "../Card/Card";
import { AddCardButton } from "../AddCardButton/AddCardButton";
import { ICard } from "../../constants/types";
import { EditableCard } from "../EditableCard/EditableCard";

type Props = {
  status: string;
  data: ICard[];
};

export const Column: React.FC<Props> = ({ status, data }) => {
  const [isCardAdding, setIsCardAdding] = useState<boolean>(false);
  const [cardInEditing, setCardInEditing] = useState<number | null>(null);

  const toggleStatusAdding = () => setIsCardAdding(!isCardAdding);

  const cardEditing = (id: number) => {
    setCardInEditing((prev) => {
      if (prev === null) return id;

      if (prev && id === prev) return null;

      if (prev && id !== prev) return id;
    });
  };
  return (
    <ColumnStyled>
      <Title>{status}</Title>
      <div>{data.length}</div>
      <CardsContainer>
        {data.map((item) => (
          <>
            {!cardInEditing || cardInEditing !== item.id ? (
              <Card key={item.id} cardData={item} cardEditing={cardEditing} />
            ) : (
              <EditableCard
                key={item.id}
                cardData={item}
                cardEditing={cardEditing}
              />
            )}
          </>
        ))}
        {!isCardAdding ? (
          <AddCardButton addCard={toggleStatusAdding} />
        ) : (
          <EditableCard toggleStatusAdding={toggleStatusAdding} />
        )}
      </CardsContainer>
    </ColumnStyled>
  );
};
