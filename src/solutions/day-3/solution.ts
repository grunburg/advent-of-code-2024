import AbstractSolution from "../abstract-solution.ts";

export default class Solution extends AbstractSolution {
  public part1(input: string): string {
    let result: number = 0;

    const muls = input.match(/mul\(\s*\d+\s*,\s*\d+\s*\)/g);
    muls?.forEach((mul) => {
      const [a, b] = mul.match(/\d+/g)?.map(Number) as number[];
      result += a * b;
    });

    return result.toString();
  }

  public part2(input: string): string {
    return "";
  }
}
