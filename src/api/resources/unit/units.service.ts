import { Unit } from "./unit.interface";
import { Units } from "./units.interface";

const units: Units = {
    1: {
      id: 1,
      name: "Burger",
      price: 5.99,
      description: "Tasty",
      image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
      id: 2,
      name: "Pizza",
      price: 2.99,
      description: "Cheesy",
      image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
      id: 3,
      name: "Tea",
      price: 1.99,
      description: "Informative",
      image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
  };

export const findAll = async (): Promise<Units> => {
return units;
};

export const find = async (id: number): Promise<Unit> => {
    return units[id];
};

export const create = async (newItem: Unit): Promise<void> => {
};

export const update = async (updatedItem: Unit): Promise<void> => {
};

export const remove = async (id: number): Promise<void> => {
  const record: Unit = units[id];

  if (record) {
    delete units[id];
    return;
  }

  throw new Error("No record found to delete");
};