export enum STATUS {
  todo = "TODO",
  inProgress = "IN PROGRESS",
  done = "DONE",
}

export interface ICard {
  id: string;
  title: string;
  description: string;
  status: keyof typeof STATUS;
  order: number;
}

export interface IColumn {
  [key: string]: ICard[];
}

export interface IBoard {
  id: string;
  title: string;
  columns: IColumn;
  createAT: string;
  updateAT: string;
}
