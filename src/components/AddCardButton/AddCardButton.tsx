import React from "react";
import { AddCardBtn, ButtonText } from "./AddCardButton.styled";
import { Icon } from "../../shared/Icon/Icon";

type Props = {
  addCard: () => void;
};

export const AddCardButton: React.FC<Props> = ({ addCard }) => {
  return (
    <AddCardBtn onClick={addCard}>
      <Icon
        iconName="add"
        width={20}
        height={20}
        stroke="inherit"
        fill="inherit"
      />
      <ButtonText>Add new task</ButtonText>
    </AddCardBtn>
  );
};
