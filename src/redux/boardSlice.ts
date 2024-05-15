import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { IBoard } from "../constants/types";
import { getBoardById } from "./operations";

// interface IState {
//   board: IBoard;
//   cardInEditing: string;
//   lastBoards: string[];
//   isLoading: boolean;
//   error: string | null;
// }

const initialState = {
  board: {
    id: "",
    title: "",
    columns: "",
    createAT: "",
    updateAT: "",
  },
  cardInEditing: "",
  lastBoards: [],
  isLoading: false,
  error: null,
};

// const handleFulfilled = (state: IState, action: PayloadAction<IBoard>) => {
//   state.board = action.payload;
//   state.isLoading = false;
//   state.error = null;
// };

// const handlePending = (state: IState) => {
//   state.isLoading = true;
//   state.error = null;
// };

// const handleRejected = (
//   state: IState,
//   action: PayloadAction<null | string>
// ) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const boardSlice = createSlice({
  name: "board",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBoardById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    // .addCase(getBoardById.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.board = action.payload;
    // })
    // .addCase(getBoardById.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });
  },
});

export const boardReducer = boardSlice.reducer;
