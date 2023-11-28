export const permutation = <T>(options: T[], selected: T[] = []): T[][] => {
  if (options.length === 1) {
    return [[...selected, options[0]]];
  }
  let result = [];
  for (let i = 0; i < options.length; i++) {
    const filteredOptions = options.filter((_, j) => i !== j);
    const selection = [...selected, options[i]];
    result = result.concat(permutation(filteredOptions, selection));
  }
  return result;
};
