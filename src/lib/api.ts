import { Product } from "./types";
import { headphones } from "./mocks";

const getAsync = <T>(value: T[]): Promise<T[]> => {
  return new Promise((res) => {
    setTimeout(() => res(value), Math.random() * 3000);
  });
};

export const getHeadphones = (): Promise<Product[]> => getAsync(headphones);
