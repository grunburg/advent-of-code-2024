import AbstractSolution from "../abstract-solution.ts";

export default class Solution extends AbstractSolution {
  protected readonly day: number = 1;
  public part1(input: string): string {
    return "A";
  }

  public part2(input: string): string {
    return "B";
  }

  private parse(input: string): string[][] {
    return [];
  }
}
