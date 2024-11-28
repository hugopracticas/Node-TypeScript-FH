import { error } from "console";
import { Customer } from "../interfaces/appInterfaces";
import { customers } from "../data/customers";

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

export const getUserById = (
  id: number,
  callback: (error?: string, user?: User) => void
) => {
  const user = users.find((user) => user.id === id);
  if (!user) {
    return callback(`User not found with id ${id}`);
  }

  return callback(undefined, user);
};

export const getUserByAge = (
  age: number,
  callback: (error?: string, customer?: Customer[]) => void
) => {
  const customer = customers.filter((customer) => customer.age < age);
  if (!customer) {
    return callback(`Customer less than 18 years dosen't exist`);
  }
  return callback(undefined, customer);
};
