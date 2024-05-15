import React from "react";
import { BoardStyled } from "./Board.styled";
import { Column } from "../Column/Column";
import { IBoard, STATUS } from "../../constants/types";

const MockBoardData: IBoard = {
  id: "33",
  title: "Board 33",
  columns: {
    todo: [
      {
        id: "1",
        title: "Task 1",
        description:
          "lorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlflorem ipsum dolorlf",
        status: "todo",
        order: 1,
      },
      {
        id: "2",
        title: "Task 2",
        description: "lorem ipsum dolorlf",
        status: "todo",
        order: 2,
      },
      {
        id: "7",
        title: "Task 7",
        description: "lorem ipsum dolorlf",
        status: "todo",
        order: 3,
      },
    ],
    inProgress: [
      {
        id: "3",
        title: "Task 3",
        description: "lorem ipsum dolorlf",
        status: "inProgress",
        order: 1,
      },
      {
        id: "4",
        title: "Task 4",
        description: "lorem ipsum dolorlf",
        status: "inProgress",
        order: 2,
      },
    ],
    done: [
      {
        id: "111",
        title: "Task 5",
        description: "lorem ipsum dolorlf",
        status: "done",
        order: 2,
      },
      {
        id: "6",
        title: "Task 6",
        description: "lorem ipsum dolorlf",
        status: "done",
        order: 1,
      },
    ],
  },
  createAT: "10.05.2024 10:00:00",
  updateAT: "10.05.2024 12:59:00",
};

export const Board: React.FC = () => {
  return (
    <BoardStyled>
      {Object.entries(MockBoardData.columns).map(([status, tasks]) => {
        const sortedTasks = tasks.sort((a, b) => a.order - b.order);
        return (
          <Column
            key={status}
            status={STATUS[status as keyof typeof STATUS]}
            data={sortedTasks}
          />
        );
      })}
    </BoardStyled>
  );
};
