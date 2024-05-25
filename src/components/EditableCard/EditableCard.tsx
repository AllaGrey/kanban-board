import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getCardInEditing, getCurrentBoardId } from "../../redux/selectors";
import { AppDispatch } from "../../redux/store";
import { addNewCard, updateOneCard } from "../../redux/operations";
import { getStatusValue } from "../../utils/getStatusValue";
import { resetEditingCard } from "../../redux/boardSlice";
import {
  CardContainer,
  ControlButton,
  ControlContainer,
  DescriptionInput,
  TitleInput,
} from "./EditableCard.styled";

type Props = {
  status: string;
  order: number;
  toggleStatusAdding?: () => void;
};

export const EditableCard: React.FC<Props> = ({
  status,
  order,
  toggleStatusAdding,
}) => {
  const currentCard = useSelector(getCardInEditing);
  const currentBoardId = useSelector(getCurrentBoardId);

  const dispatch = useDispatch<AppDispatch>();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: currentCard.title,
      description: currentCard.description,
    },
  });

  const handleSaveChanges = (data: { title: string; description: string }) => {
    if (currentCard?.id) {
      dispatch(
        updateOneCard({
          id: currentCard.id,
          title: data.title || "New task",
          description: data.description || "Here is description",
          order,
          status: getStatusValue(status),
          boardId: currentBoardId || "",
        })
      );
    } else {
      dispatch(
        addNewCard({
          title: data.title || "New task",
          description: data.description || "Here is description",
          order,
          status: getStatusValue(status),
          boardId: currentBoardId || "",
        })
      );
    }
    toggleStatusAdding && toggleStatusAdding();
  };

  const handleCancelChanges = () => {
    dispatch(resetEditingCard());
  };
  return (
    <CardContainer onSubmit={handleSubmit(handleSaveChanges)}>
      <TitleInput
        {...register("title")}
        onChange={(e) => setValue("title", e.target.value)}
      />
      <DescriptionInput
        {...register("description")}
        onChange={(e) => setValue("description", e.target.value)}
      />
      <ControlContainer>
        <ControlButton type="submit" $buttonType="save">
          Save
        </ControlButton>
        <ControlButton
          onClick={handleCancelChanges}
          type="button"
          $buttonType="cancel"
        >
          Cancel
        </ControlButton>
      </ControlContainer>
    </CardContainer>
  );
};
