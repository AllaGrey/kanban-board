import { STATUS } from "../constants/types";

export const getStatusValue = (value: string): keyof typeof STATUS => {
  return (Object.keys(STATUS) as Array<keyof typeof STATUS>).find(
    (key) => STATUS[key] === value
  ) as keyof typeof STATUS;
};
