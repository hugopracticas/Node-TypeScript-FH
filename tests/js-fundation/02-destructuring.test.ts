import { characters } from "../../src/js-fundation/02-destructuring";

describe("js-fundation/02-destructuring", () => {
  test("Characters should contain Flash, Superman", () => {
    const [flash, superman] = characters;
    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });
});
