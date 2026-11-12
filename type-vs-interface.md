# Type Aliases vs Interfaces in TypeScript: Key Differences and When to Use Them

## Introduction

TypeScript gives us two ways to describe an object: `type` and `interface`. For simple objects they do the same job, but they are not identical.

## What each one can describe

A `type` can also be a union or a tuple. An `interface` is mainly for object shapes.

```
type ID = string | number;
```

## Declaration merging

If we declare an interface twice with the same name, TypeScript joins them into one.

```
interface Student { name: string; }
interface Student { age: number; }
```

Now `Student` has both `name` and `age`. Doing this with a `type` gives an error.

## Extending

Interfaces use `extends`. Types use `&`.

```
interface Person { name: string; }
interface Employee extends Person { salary: number; }

type Animal = { name: string };
type Dog = Animal & { breed: string };
```

## Which one to use

We use `interface` for objects and classes, especially when the shape might grow later. We use `type` for unions and tuples, since an `interface` can't describe those.

## Conclusion

`type` is more flexible, while `interface` can be merged and extended.
