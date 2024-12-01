import { before, describe, test } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import Solution from "./solution.ts";

describe("day 1 solution", () => {
  let input: string;

  before(async () => {
    input = await Deno.readTextFile(
      `./src/solutions/day-1/input.txt`,
    );
  });

  test("part 1", () => {
    const result = new Solution().part1(input);

    expect(result).toBe("A");
  });
});
