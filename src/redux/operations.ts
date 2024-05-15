import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBoardById = createAsyncThunk(
  "board/getBoard",
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

export const addBoard = createAsyncThunk(
  "board/addBoard",
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

export const addCard = createAsyncThunk(
  "board/addCard",
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

export const updateCard = createAsyncThunk(
  "board/updateCard",
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

export const deleteCard = createAsyncThunk(
  "board/deleteCard",
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
