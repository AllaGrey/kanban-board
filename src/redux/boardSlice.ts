import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addNewBoard,
  addNewCard,
  deleteBoardById,
  deleteCardById,
  getBoard,
  updateBoardTitle,
  updateCardOrder,
  updateOneCard,
} from "./operations";
import { IBoard, ICard, IState, STATUS } from "../constants/types";

const initialState: IState = {
  board: {
    id: "",
    title: "",
    cards: {
      todo: [],
      inProgress: [],
      done: [],
    },
  },
  cardInEditing: {
    id: "",
    title: "",
    description: "",
    status: null,
    order: 0,
    boardId: "",
  },
  lastBoards: [],
  isLoading: false,
  error: null,
};

const handleFulfilled = (state: IState, action: PayloadAction<IBoard>) => {
  state.board = action.payload;
  state.isLoading = false;
  state.error = null;
};

const handlePending = (state: IState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (
  state: IState,
  action: PayloadAction<string | undefined>
) => {
  state.isLoading = false;
  state.error = action.payload as string;
};

const boardSlice = createSlice({
  name: "board",
  initialState: initialState,
  reducers: {
    addingCard: (state: IState, action: PayloadAction<keyof typeof STATUS>) => {
      state.cardInEditing.id = initialState.cardInEditing.id;
      state.cardInEditing.title = initialState.cardInEditing.title;
      state.cardInEditing.description = initialState.cardInEditing.description;
      state.cardInEditing.order = initialState.cardInEditing.order;
      state.cardInEditing.boardId = initialState.cardInEditing.boardId;

      state.cardInEditing.status = action.payload;

      state.isLoading = false;
      state.error = null;
    },
    setCardInEditing: (state, action: PayloadAction<ICard>) => {
      state.cardInEditing = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    resetEditingCard: (state) => {
      state.cardInEditing = initialState.cardInEditing;
      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getBoard.fulfilled,
        (state: IState, action: PayloadAction<IBoard>) =>
          handleFulfilled(state, action)
      )
      .addCase(
        addNewBoard.fulfilled,
        (state: IState, action: PayloadAction<IBoard>) =>
          handleFulfilled(state, action)
      )
      .addCase(
        updateBoardTitle.fulfilled,
        (state: IState, action: PayloadAction<string>) => {
          state.board.title = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(deleteBoardById.fulfilled, (state) => {
        state.board = initialState.board;
        state.cardInEditing = initialState.cardInEditing;
        state.lastBoards = initialState.lastBoards;
        state.isLoading = initialState.isLoading;
        state.error = initialState.error;
      })
      .addCase(
        addNewCard.fulfilled,
        (state: IState, action: PayloadAction<ICard>) => {
          state.cardInEditing = initialState.cardInEditing;

          const { status } = action.payload;

          if (status && !state.board.cards[status]) {
            state.board.cards[status] = [];
          }
          status && state.board.cards[status].push(action.payload);

          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(
        deleteCardById.fulfilled,
        (
          state: IState,
          action: PayloadAction<Pick<ICard, "id" | "status">>
        ) => {
          const { id, status } = action.payload;
          console.log(id, status, "from reducer");
          if (status && state.board.cards[status]) {
            state.board.cards[status] = state.board.cards[status].filter(
              (card) => card.id !== id
            );
          }
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(
        updateOneCard.fulfilled,
        (state: IState, action: PayloadAction<ICard>) => {
          const { id, status } = action.payload;

          if (status && state.board.cards[status]) {
            state.board.cards[status] = state.board.cards[status].map((card) =>
              card.id === id ? action.payload : card
            );
          }

          state.cardInEditing = initialState.cardInEditing;

          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(
        updateCardOrder.fulfilled,
        (state, action: PayloadAction<IBoard>) => {
          state.board.cards = action.payload.cards;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getBoard.pending,
          addNewBoard.pending,
          deleteBoardById.pending,
          addNewCard.pending,
          deleteCardById.pending,
          updateOneCard.pending,
          updateCardOrder.pending
        ),
        (state: IState) => handlePending(state)
      )
      .addMatcher(
        isAnyOf(
          getBoard.rejected,
          addNewBoard.rejected,
          deleteBoardById.rejected,
          addNewCard.rejected,
          deleteCardById.rejected,
          updateOneCard.rejected,
          updateCardOrder.rejected
        ),
        (state: IState, action) => handleRejected(state, action)
      );
  },
});
export const { setCardInEditing, resetEditingCard, addingCard } =
  boardSlice.actions;
export const boardReducer = boardSlice.reducer;
