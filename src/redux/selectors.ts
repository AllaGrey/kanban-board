import { IState } from "../constants/types";

export const getCurrentBoard = (state: IState) => state.board;
export const getCurrentBoardId = (state: IState) => state.board.id;
export const getCardInEditing = (state: IState) => state.cardInEditing;
export const getCardInEditingId = (state: IState) => state.cardInEditing.id;
export const getStatusEditing = (state: IState) => state.cardInEditing.status;
