import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBoard, ICard, STATUS } from "../constants/types";
import {
  addBoard,
  deleteBoard,
  getBoardById,
  updateBoard,
} from "../services/board/boardAPI";
import { getErrorMessage } from "../utils/getErrorMessage";
import {
  addCard,
  deleteCard,
  updateCard,
  updateManyCards,
} from "../services/card/cardAPI";

export const getBoard = createAsyncThunk<
  IBoard,
  string,
  { rejectValue: string }
>("board/getBoard", async (id, { rejectWithValue }) => {
  const board = await getBoardById(id);
  if (!board) {
    return rejectWithValue("Something went wrong");
  }
  return board;
});

export const getLastBoards = createAsyncThunk(
  "board/getLastBoards",
  async (id: string, { rejectWithValue }) => {
    try {
      console.log(id);
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
      return;
    }
  }
);

export const addNewBoard = createAsyncThunk<
  IBoard,
  string,
  { rejectValue: string }
>("board/addBoard", async (title = "New board", { rejectWithValue }) => {
  const board = await addBoard(title);
  if (!board) {
    return rejectWithValue("Something went wrong");
  }
  return board as IBoard;
});

export const updateBoardTitle = createAsyncThunk<
  string,
  { title: string; boardId: string },
  { rejectValue: string }
>(
  "board/updateTitle",
  async ({ title = "New board", boardId }, { rejectWithValue }) => {
    const updatedBoard = await updateBoard(title, boardId);
    if (!updatedBoard) {
      return rejectWithValue("Something went wrong");
    }
    return updatedBoard?.title as string;
  }
);

export const deleteBoardById = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("board/deleteBoard", async (id: string, thunkAPI) => {
  try {
    await deleteBoard(id);
    return;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const addNewCard = createAsyncThunk<
  ICard,
  ICard,
  { rejectValue: string }
>("board/addCard", async (cardData, { rejectWithValue }) => {
  const newCard = await addCard(cardData);
  if (!newCard) {
    return rejectWithValue("Something went wrong");
  }
  return newCard as ICard;
});

export const updateOneCard = createAsyncThunk<
  ICard,
  ICard,
  { rejectValue: string }
>("board/updateOneCard", async (card, { rejectWithValue }) => {
  const updatedCard = await updateCard(card);
  if (!updatedCard) {
    return rejectWithValue("Something went wrong");
  }
  return updatedCard as ICard;
});

export const updateCardOrder = createAsyncThunk<
  IBoard,
  ICard[],
  { rejectValue: string }
>("board/updateCardOrder", async (cardsToUpdate, { rejectWithValue }) => {
  const updatedCards = await updateManyCards(cardsToUpdate);
  if (!updatedCards) {
    return rejectWithValue("Something went wrong");
  }
  return updatedCards as IBoard;
});

export const deleteCardById = createAsyncThunk<
  Pick<ICard, "id" | "status">,
  { id: string; status: keyof typeof STATUS },
  { rejectValue: string }
>("board/deleteCard", async ({ id, status }, thunkAPI) => {
  try {
    await deleteCard(id);
    return { id, status };
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const editCardById = createAsyncThunk<
  ICard,
  ICard,
  { rejectValue: string }
>("board/editCard", async (card, thunkAPI) => {
  try {
    return card as ICard;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});
