import axios from "axios";
import { ENDPOINTS, ICard } from "../../constants/types";

const BASE_URL = "https://kanban-board-back.vercel.app/api/";

axios.defaults.baseURL = BASE_URL;

export const addCard = async ({
  title,
  description,
  status,
  order,
  boardId,
}: Omit<ICard, "id">) => {
  try {
    const result = await axios.post(`/${ENDPOINTS.CARDS}`, {
      title,
      description,
      status,
      order,
      boardId,
    });
    console.log(result);

    return result.data as ICard;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCard = async (cardId: string) => {
  try {
    const result = await axios.delete(`/${ENDPOINTS.CARDS}/${cardId}`);
    console.log(result, "deleteCard");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updateCard = async (card: ICard) => {
  const { title, description, status, order, boardId, id } = card;
  try {
    const { data } = await axios.put(`/${ENDPOINTS.CARDS}/${id}`, {
      title,
      description,
      status,
      order,
      boardId,
    });
    console.log(data, "updateCard");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateManyCards = async (cards: ICard[]) => {
  try {
    const { data } = await axios.put(`/${ENDPOINTS.CARDS}`, cards);
    console.log(data, "updateManyCards");
    return data;
  } catch (error) {
    console.log(error);
  }
};
