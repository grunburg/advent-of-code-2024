import AbstractSolution from "../abstract-solution.ts";

export default class Solution extends AbstractSolution {
  public part1(input: string): string {
    let count: number = 0;

    const reports = this.parse(input);
    for (const report of reports) {
      if (this.isReportSafe(report)) {
        count++;
      }
    }

    return count.toString();
  }

  public part2(input: string): string {
    let count: number = 0;

    const reports = this.parse(input);
    for (const report of reports) {
      if (this.isReportSafe(report)) {
        count++;
        continue;
      }

      let isSafeWithDampener = false;
      for (let i = 0; i < report.length; i++) {
        const dampened: number[] = report.filter((_, j) => j !== i); // Fuckery
        if (this.isReportSafe(dampened)) {
          isSafeWithDampener = true;
          break;
        }
      }

      if (isSafeWithDampener) {
        count++;
      }
    }

    return count.toString();
  }

  private isReportSafe(report: number[]): boolean {
    let temp = report[0];
    let desc: boolean | undefined;

    for (let i = 1; i < report.length; i++) {
      const next = report[i];
      const diff = Math.abs(temp - next);

      if (temp === next) {
        return false;
      }

      if (desc === undefined) {
        desc = temp > next;
      }

      if (
        ![1, 2, 3].includes(diff) ||
        (desc && temp <= next) ||
        (!desc && temp >= next)
      ) {
        return false;
      }

      temp = next;
    }

    return true;
  }

  private parse(input: string): number[][] {
    const lines: string[] = input.split("\n");

    return lines.map((line) => line.split(" ").map(Number));
  }
}
