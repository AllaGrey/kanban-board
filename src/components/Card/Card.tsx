import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { deleteCardById } from "../../redux/operations";
import { setCardInEditing } from "../../redux/boardSlice";
import { ICard } from "../../constants/types";
import { Icon } from "../../shared/Icon/Icon";
import {
  Button,
  CardContainer,
  CardText,
  CardTitle,
  ControlButtons,
} from "./Card.styled";

type Props = {
  cardData: ICard;
  draggingCard: string;
  setDraggingCard: React.Dispatch<React.SetStateAction<string>>;
  toggleStatusAdding: () => void;
};

export const Card: React.FC<Props> = ({
  cardData,
  draggingCard,
  setDraggingCard,
  toggleStatusAdding,
}) => {
  const { title, description, id, status } = cardData;

  const dispatch = useDispatch<AppDispatch>();

  const handleCardEdit = () => {
    dispatch(setCardInEditing(cardData));
    toggleStatusAdding && toggleStatusAdding();
  };

  const handleCardDelete = () => {
    if (id && status) {
      dispatch(deleteCardById({ id, status: status }));
    }
  };

  return (
    <CardContainer
      draggable
      onDragStart={() => cardData.id && setDraggingCard(cardData.id)}
      onDragEnd={() => setDraggingCard("")}
      $dragging={draggingCard === cardData.id}
    >
      <CardTitle>{title}</CardTitle>
      <ControlButtons>
        <Button onClick={handleCardEdit}>
          <Icon
            iconName="update"
            width={20}
            height={20}
            stroke="inherit"
            fill="inherit"
          />
        </Button>
        <Button onClick={handleCardDelete}>
          <Icon
            iconName="delete"
            width={20}
            height={20}
            stroke="inherit"
            fill="inherit"
          />
        </Button>
      </ControlButtons>
      <CardText>{description}</CardText>
    </CardContainer>
  );
};
