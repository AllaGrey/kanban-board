import React, { useState } from "react";
import { DropAreaContainer } from "./DroppingArea.styled";

type Props = {
  onDrop: () => void;
};

export const DroppingArea: React.FC<Props> = ({ onDrop }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <DropAreaContainer
      onDragEnter={() => setIsShown(true)}
      onDragLeave={() => setIsShown(false)}
      onDrop={() => {
        onDrop();
        setIsShown(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      $isShown={isShown}
    >
      DroppingArea
    </DropAreaContainer>
  );
};
