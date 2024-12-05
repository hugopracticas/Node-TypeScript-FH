import { getUuidv4 } from "../../src/plugins/get-id.plugin";

describe("plugins/get-id.plugin", () => {
  test("getUUID() should return  a UUID", () => {
    const uuid = getUuidv4();

    expect(typeof uuid).toBe("string");
    console.log(uuid.length);
    expect(uuid.length).toBe(36);
  });
});
