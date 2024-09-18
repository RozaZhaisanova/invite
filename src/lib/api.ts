import { Product } from "./types";
import { headphones } from "./mocks";

const getAsync = <T>(value: T[]): Promise<T[]> => {
  return new Promise((res) => {
    setTimeout(() => res(value), Math.random() * 30);
  });
};

export const getHeadphones = (): Promise<Product[]> => getAsync(headphones);
