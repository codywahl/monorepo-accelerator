import { person } from "../../shared/src/types/person";

const p1: person = { name: "Alice", age: 30 };

export function greet(person: person): string {
  return `Hello, ${person.name} age ${person.age}!`;
}

// Example usage
console.log(greet(p1));
