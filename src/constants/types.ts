export enum STATUS {
  todo = "TODO",
  inProgress = "IN PROGRESS",
  done = "DONE",
}

export enum ENDPOINTS {
  BOARDS = "boards",
  CARDS = "cards",
}

export interface ICard {
  id?: string;
  title: string;
  description: string;
  status: keyof typeof STATUS | null;
  order: number;
  boardId: string;
}

export interface IColumn {
  [key: string]: ICard[];
}

export interface IBoard {
  id?: string;
  title: string;
  cards: IColumn;
}

export interface IState {
  board: IBoard;
  cardInEditing: ICard;
  lastBoards: string[];
  isLoading: boolean;
  error: string | null;
}
