import { person } from "../../shared/src/types/person";
import { greet } from "./greet";

describe("greet function", () => {
  it("should return the correct greeting message", () => {
    const p1: person = { name: "Alice", age: 30 };
    const result = greet(p1);
    expect(result).toBe("Hello, Alice age 30!");
  });

  it("should return the correct greeting message for another person", () => {
    const p2: person = { name: "Bob", age: 25 };
    const result = greet(p2);
    expect(result).toBe("Hello, Bob age 25!");
  });
});
