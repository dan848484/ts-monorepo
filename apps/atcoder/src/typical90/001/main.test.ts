import { main } from "./main";

describe("yokan party", () => {
  const mockConsoleLog = jest.fn();
  global.console.log = mockConsoleLog;
  test("入出力例1", () => {
    const input = `3 34
1
8 13 26`;
    main(input);
    expect(mockConsoleLog).toHaveBeenCalledWith(13);
  });
});
