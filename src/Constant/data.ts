import { v4 as uuidv4 } from "uuid";

export const data = { name: "test@gmail.com", password: "12345" };
export const generateUUID = (): string => {
  return uuidv4();
};
