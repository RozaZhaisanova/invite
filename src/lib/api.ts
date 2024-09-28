import { Product } from "./types";
import { headphones } from "./mocks";

const getAsync = <T>(value: T[]): Promise<T[]> => {
  return new Promise((res) => res(value));
};
export const getHeadphones = (): Promise<Product[]> => getAsync(headphones);
