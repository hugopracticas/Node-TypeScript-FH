export interface User {
  id: number;
  name: string;
}
export interface Customer extends User {
  age: number;
}
