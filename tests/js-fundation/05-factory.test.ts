import { buildMakePerson } from "../../src/js-fundation/05-factory";

describe("js-fundation/05-factory.ts", () => {
  const getUuidv4 = () => "1234";
  const getAge = () => 34;
  test("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getUuidv4, getAge });
    console.log("OBJ", makePerson);
    expect(typeof makePerson).toBe("function");
  });

  test("makePerson should return a person", () => {
    const makePerson = buildMakePerson({ getUuidv4, getAge });
    const jhon = makePerson({ name: "John Doe", birthdate: "1996-03-15" });
    expect(jhon).toEqual({
      id: getUuidv4(),
      name: "John Doe",
      birthdate: "1996-03-15",
      age: getAge(),
    });
  });
});
