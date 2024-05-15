import React from "react";
import { ICard } from "../../constants/types";
import {
  CardContainer,
  ControlButton,
  ControlContainer,
  DescriptionInput,
  TitleInput,
} from "./EditableCard.styled";

type Props = {
  toggleStatusAdding?: () => void;
  cardEditing?: (id: string) => void;
  cardData?: ICard;
};

export const EditableCard: React.FC<Props> = ({
  toggleStatusAdding,
  cardEditing,
  cardData,
}) => {
  const handleSaveChanges = () => {
    if (toggleStatusAdding) toggleStatusAdding();
    if (cardEditing && cardData) cardEditing(cardData?.id);
  };
  const handleCancelChanges = () => {
    if (toggleStatusAdding) toggleStatusAdding();
    if (cardEditing && cardData) cardEditing(cardData?.id);
  };
  return (
    <CardContainer>
      <TitleInput value={cardData?.title} />
      <DescriptionInput value={cardData?.description} />
      <ControlContainer>
        <ControlButton onClick={handleSaveChanges} $buttonType="save">
          Save
        </ControlButton>
        <ControlButton onClick={handleCancelChanges} $buttonType="cancel">
          Cancel
        </ControlButton>
      </ControlContainer>
    </CardContainer>
  );
};
