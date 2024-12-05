import { before, describe, test } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import Solution from "./solution.ts";

describe("day 5 solution", () => {
  let input: string;

  before(async () => {
    input = await Deno.readTextFile(
      `./src/solutions/day-5/test-input.txt`,
    );
  });

  test("part 1", () => {
    const result = new Solution().part1(input);

    expect(result).toEqual("143");
  });

  test("part 2", () => {
    const result = new Solution().part2(input);

    expect(result).toEqual("");
  });
});
