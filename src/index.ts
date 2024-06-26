export type Falsy = "" | false | 0 | null | undefined;

export function classnames1(a: string | Falsy): string | undefined {
  return a || undefined;
}

export function classnames2(
  a: string | Falsy,
  b: string | Falsy
): string | undefined {
  return a ? (b ? `${a} ${b}` : a) : b || undefined;
}

export function classnames(
  a: string | Falsy,
  b?: string | Falsy,
  c?: string | Falsy
): string | undefined {
  return a
    ? b
      ? c
        ? `${a} ${b} ${c}`
        : `${a} ${b}`
      : c
      ? `${a} ${c}`
      : a
    : b
    ? c
      ? `${b} ${c}`
      : b
    : c || undefined;
}

export const classnames3: (
  a: string | Falsy,
  b: string | Falsy,
  c: string | Falsy
) => string | undefined = classnames;

export function classnames4(
  a: string | Falsy,
  b: string | Falsy,
  c: string | Falsy,
  d: string | Falsy
): string | undefined {
  return classnames2(classnames2(a, b), classnames2(c, d));
}

export function classnamesMany(
  ...names: Array<string | Falsy>
): string | undefined {
  return names.filter(Boolean).join(" ") || undefined;
}

export function classnamesJoin(
  names: ReadonlyArray<string | Falsy>
): string | undefined {
  return names.filter(Boolean).join(" ") || undefined;
}
