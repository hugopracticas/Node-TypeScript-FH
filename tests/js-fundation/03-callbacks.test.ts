import { getUserById } from "../../src/js-fundation/03-callbacks";

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
});
