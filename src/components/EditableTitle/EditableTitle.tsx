import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { updateBoardTitle } from "../../redux/operations";
import {
  EditableTitleContainer,
  ControlContainer,
  ControlButton,
  TitleInput,
} from "./EditableTitle.styled";

type Props = {
  boardTitle: string;
  boardId: string;
  toggleEditingTitle: () => void;
};

interface EditableTitleFormData {
  title: string;
}

export const EditableTitle: React.FC<Props> = ({
  boardTitle,
  boardId,
  toggleEditingTitle,
}) => {
  const { register, handleSubmit, setValue } = useForm<EditableTitleFormData>({
    defaultValues: {
      title: boardTitle,
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  const onChangeTitle = ({ title }: EditableTitleFormData) => {
    console.log(title);
    dispatch(updateBoardTitle({ title, boardId }));
    toggleEditingTitle();
  };

  const onCancelChanges = () => {
    console.log("Cancelling changes");
    toggleEditingTitle();
  };

  return (
    <EditableTitleContainer onSubmit={handleSubmit(onChangeTitle)}>
      <TitleInput
        placeholder={boardTitle}
        {...register("title")}
        onChange={(e) => {
          setValue("title", e.target.value);
        }}
      />
      <ControlContainer>
        <ControlButton type="submit" $buttonType="save">
          Save
        </ControlButton>
        <ControlButton
          onClick={onCancelChanges}
          type="button"
          $buttonType="cancel"
        >
          Cancel
        </ControlButton>
      </ControlContainer>
    </EditableTitleContainer>
  );
};
