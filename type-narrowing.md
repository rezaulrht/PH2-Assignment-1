# Understanding Type Narrowing in TypeScript with Practical Examples

## Introduction

In our `processInput` function the parameter could be a string or a number, and calling `.toUpperCase()` on it gave us an error. The fix was type narrowing: checking a value so TypeScript knows its exact type.

## Using `typeof`

We use this one most. It works for simple types like `string` and `number`.

```
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Inside the `if`, `value` is a string. In the `else`, it is a number.

## Using `instanceof`

`instanceof` checks if an object was made from a certain class, for example `animal instanceof Dog` before calling `animal.bark()`. Without that check, TypeScript won't let us call `bark()` on something that could be a `Cat`.

## Using `in`

`in` checks if a property exists on an object.

```
type Admin = { permissions: string[] };
type User = { username: string };

function showInfo(person: Admin | User) {
  if ("permissions" in person) {
    console.log(person.permissions);
  }
}
```

## Conclusion

Narrowing stops mistakes like calling a string method on a number. We use `typeof` for simple types, `instanceof` for classes, and `in` for objects. `typeof` can't tell two classes or two object shapes apart, so we need the other two for those.
