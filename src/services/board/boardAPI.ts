import axios from "axios";
import { ENDPOINTS, IBoard } from "../../constants/types";

const BASE_URL = "https://kanban-board-back.vercel.app/api";

axios.defaults.baseURL = BASE_URL;

export const getBoardById = async (boardId: string) => {
  try {
    const { data } = await axios.get(`/${ENDPOINTS.BOARDS}/${boardId}`);
    console.log(data, "getBoardById");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addBoard = async (title: string): Promise<IBoard | void> => {
  try {
    const { data } = await axios.post(`/${ENDPOINTS.BOARDS}`, { title });
    console.log(data, "addBoard");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBoard = async (boardId: string): Promise<void> => {
  try {
    await axios.delete(`/${ENDPOINTS.BOARDS}/${boardId}`);
    return;
  } catch (error) {
    console.log(error);
  }
};

export const updateBoard = async (
  title: string,
  boardId: string
): Promise<IBoard | void> => {
  try {
    const { data } = await axios.patch(`/${ENDPOINTS.BOARDS}/${boardId}`, {
      title,
    });
    console.log(data, "updateBoard");
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
