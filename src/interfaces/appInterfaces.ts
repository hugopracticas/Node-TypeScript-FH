export interface User {
  id: number;
  name: string;
}
export interface Customer extends User {
  age: number;
}

export interface BuildMakerPerson {
  getUuidv4: () => string;
  getAge: (birthdate: string) => number;
}

export interface PersonOptions {
  name: string;
  birthdate: string;
}
