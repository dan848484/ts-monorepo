export const combination = <T>(options: T[], k: number): T[][] => {
  if (k === 0) {
    return [];
  } else if (k === 1) {
    return [...options.map((o) => [o])];
  }
  let result: T[][] = [];
  for (let i = 0; i < options.length - k + 1; i++) {
    const slicedOptions = options.slice(i + 1);
    result = result.concat(
      combination(slicedOptions, k - 1).map((c) => [options[i]].concat(c))
    );
  }
  return result;
};
