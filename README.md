# Classnames

A small, memory-efficient npm package for dynamically concatenating CSS class names. This package provides various functions taking certain numbers of arguments, though its main function is `classnames`, all filtering out falsy values to ensure clean and valid class strings.

## Installation

You can install this package using npm:

```bash
npm install @grinstead/classnames
```

## Usage

### classnames

Concatenates up to three class names, filtering out falsy values. Returns `undefined` if all inputs are falsy.

```typescript
import { classnames } from "@grinstead/classnames";

const className = classnames("class1", "class2", "class3"); // 'class1 class2 class3'
const twoClassNames = classnames("class1", "", "class3"); // 'class1 class3'
const singleClassName = classnames("class1"); // 'class1'
const emptyClassName = classnames("", "", ""); // undefined
```

### classnames1

Generates a single class name, or returns `undefined` if the input is falsy.

```typescript
import { classnames1 } from "@grinstead/classnames";

const className = classnames1("class1"); // 'class1'
const emptyClassName = classnames1(""); // undefined
```

### classnames2

Concatenates two class names, filtering out falsy values. Returns `undefined` if both inputs are falsy.

```typescript
import { classnames2 } from "@grinstead/classnames";

const className = classnames2("class1", "class2"); // 'class1 class2'
const singleClassName = classnames2("class1", ""); // 'class1'
const emptyClassName = classnames2("", ""); // undefined
```

### classnames3

An alias for the `classnames` function, providing the same functionality but declaring the arguments in the typescript as non-optional.

```typescript
import { classnames3 } from "@grinstead/classnames";

const className = classnames3("class1", "class2", "class3"); // 'class1 class2 class3'
```

### classnames4

Concatenates four class names. Returns `undefined` if all inputs are falsy.

```typescript
import { classnames4 } from "@grinstead/classnames";

const className = classnames4("class1", "class2", "class3", "class4"); // 'class1 class2 class3 class4'
const twoClassNames = classnames4("class1", "", "class3", ""); // 'class1 class3'
const singleClassName = classnames4("", "", "class3", ""); // 'class3'
const emptyClassName = classnames4("", "", "", ""); // undefined
```

### classnamesMany

Concatenates any number of class names, filtering out falsy values. Returns `undefined` if all inputs are falsy.

```typescript
import { classnamesMany } from "@grinstead/classnames";

const className = classnamesMany("class1", "class2", "class3"); // 'class1 class2 class3'
const twoClassNames = classnamesMany("class1", "", "class3"); // 'class1 class3'
const emptyClassName = classnamesMany("", "", ""); // undefined
```

### classnamesJoin

Concatenates am array of class names, filtering out falsy values. Returns `undefined` if all inputs are falsy.

```typescript
import { classnamesJoin } from "@grinstead/classnames";

const className = classnamesJoin(["class1", "class2", "class3"]); // 'class1 class2 class3'
const emptyClassName = classnamesJoin(["", "", ""]); // undefined
```

## License

This project is licensed under the UNLICENSE, which means you can use it however you like - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## Author

- [Joe Grinstead](https://github.com/grinstead)
