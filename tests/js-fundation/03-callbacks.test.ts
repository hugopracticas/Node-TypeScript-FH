import { getUserByAge, getUserById } from "../../src/js-fundation/03-callbacks";

describe("js-functions/03-callbacks", () => {
  test("getUserById should return an error if user does not exist", () => {
    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined;
    });
  });

  test("getUserById should return an object with information, about user", () => {
    const id = 1;

    getUserById(id, (err, user) => {
      expect(user).toEqual({ id: 1, name: "John Doe" });
      expect(user?.name).toBe("John Doe");
      expect(err).toBeUndefined;
    });
  });

  test("getUserByAgent, Should return an array", () => {
    const id = 18;

    getUserByAge(id, (err, customer) => {
      expect(customer?.length).toBeGreaterThan(0);
    });
  });

  test("getUserByAgent, should return an array", () => {
    const id = 18;

    getUserByAge(id, (err, customer) => {
      expect(customer).toEqual([
        {
          id: 5,
          name: "Camila Maya",
          age: 7,
        },
        {
          id: 6,
          name: "Yael Jacome",
          age: 9,
        },
      ]);
    });
  });

  test("getUserByAgent, Should return an empty array", () => {
    const id = 0;

    getUserByAge(id, (err, customer) => {
      expect(err).toBe("No exixtse usuario con ese rango de edad");
    });
  });
});
