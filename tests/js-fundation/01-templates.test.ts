import { emailTemplate } from "../../src/js-fundation/01-templates";

describe("js-fundation/01-template.ts", () => {
  test("emailtemplate should contain a greeting", () => {
    expect(emailTemplate).toContain("Hi,");
  });

  test("emailTemplate should contain {{name}} and {{orderId}}", () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
    /**Ó*/
    expect(emailTemplate).toContain("{{name}}");
    expect(emailTemplate).toContain("{{orderId}}");
  });
});
