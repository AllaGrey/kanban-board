import React from "react";
import {
  Button,
  CardContainer,
  CardText,
  CardTitle,
  ControlButtons,
} from "./Card.styled";
import { ICard } from "../../constants/types";
import { Icon } from "../../shared/Icon/Icon";

type Props = {
  cardData: ICard;
  cardEditing: (id: number) => void;
};

export const Card: React.FC<Props> = ({ cardData, cardEditing }) => {
  const { title, description } = cardData;

  const handleCardEdit = () => {
    cardEditing(cardData.id);
    console.log("Editing card");
  };

  const handleCardDelete = () => {
    console.log("Deleting card");
  };
  return (
    <CardContainer draggable>
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
