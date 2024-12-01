import AbstractSolution from "../abstract-solution.ts";

interface Output {
  left: number[];
  right: number[];
}

export default class Solution extends AbstractSolution {
  public part1(input: string): string {
    const { right, left } = this.parse(input);

    const r = right.sort();
    const l = left.sort();

    const result: number[] = [];

    for (let i = 0; i < r.length; i++) {
      result.push(Math.abs(r[i] - l[i]));
    }

    return result.reduce((sum: number, num: number) => sum + num, 0).toString();
  }

  public part2(input: string): string {
    const { right, left } = this.parse(input);

    const result: number[] = [];

    right.forEach((r) => {
      const l = left.filter((l) => l === r).length;
      result.push(r * l);
    });

    return result.reduce((sum: number, num: number) => sum + num, 0).toString();
  }

  private parse(input: string): Output {
    const left: number[] = [];
    const right: number[] = [];

    const lines: string[] = input.split("\n");
    lines.forEach((line) => {
      const [r, l] = line.split("   ");

      right.push(parseInt(r));
      left.push(parseInt(l));
    });

    return { left, right };
  }
}
