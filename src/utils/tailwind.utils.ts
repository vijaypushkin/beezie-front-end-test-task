/**
 * Usually used wit clsx and tsMerge, but to comply with the rules of the project
 * I'm using a lightweight function
 */
const cn = (...classes: (string | false | null | undefined)[]): string => {
  return classes.filter(Boolean).join(" ");
};

export { cn };
