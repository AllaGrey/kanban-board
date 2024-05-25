import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addingCard } from "../../redux/boardSlice";
import { STATUS } from "../../constants/types";
import { getStatusValue } from "../../utils/getStatusValue";
import { Icon } from "../../shared/Icon/Icon";
import { AddCardBtn, ButtonText } from "./AddCardButton.styled";

type Props = {
  openAdding: () => void;
  status: STATUS;
  statusEditing?: keyof typeof STATUS;
};

export const AddCardButton: React.FC<Props> = ({ openAdding, status }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddingCard = () => {
    const statusValue = getStatusValue(status);
    statusValue && dispatch(addingCard(statusValue));
    openAdding();
  };

  return (
    <AddCardBtn onClick={handleAddingCard}>
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
