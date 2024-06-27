import { expect, test } from "bun:test";
import {
  classnames,
  classnames1,
  classnames2,
  classnames3,
  classnames4,
  classnamesJoin,
  classnamesMany,
} from "./index.ts";

const falsies = [undefined, null, 0, NaN as 0, false, ""] as const;

let falsyIndex = 0;
function getFalsy() {
  return falsies[falsyIndex++ % falsies.length];
}

for (let length = 0; length <= 4; length++) {
  test(`classnames of ${length} args`, () => {
    const classes = [];
    for (let i = 0; i < length; i++) {
      classes.push(i === 0 ? `class0 sneakyclass` : `class${i}`);
    }

    for (let bitfield = (1 << length) - 1; bitfield >= 0; bitfield--) {
      // iterate over every possible combination of string and falsy
      const args: Array<string | ReturnType<typeof getFalsy>> = classes.map(
        (classname, i) => (bitfield & (1 << i) ? classname : getFalsy())
      );

      const result = args.filter(Boolean).join(" ") || undefined;

      if (length <= 3) {
        expect(classnames(...(args as [string, string?, string?]))).toEqual(
          result!
        );
      }

      switch (args.length) {
        case 4:
          expect(classnames4(args[0], args[1], args[2], args[3])).toEqual(
            result!
          );
          break;
        case 3:
          expect(classnames3(args[0], args[1], args[2])).toEqual(result!);
          break;
        case 2:
          expect(classnames2(args[0], args[1])).toEqual(result!);
          break;
        case 1:
          expect(classnames1(args[0])).toEqual(result!);
          break;
      }

      expect(classnamesMany(...args)).toEqual(result!);
      expect(classnamesJoin(args)).toEqual(result!);
    }
  });
}
