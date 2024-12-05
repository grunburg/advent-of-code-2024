import AbstractSolution from "../abstract-solution.ts";

export default class Solution extends AbstractSolution {
  public part1(input: string): string {
    const validUpdates: number[][] = [];
    const middlePageNumbers: number[] = [];

    const { updates, rules } = this.parse(input);

    for (const update of updates) {
      let isViolated = false;

      for (const [x, y] of rules) {
        if (update.includes(x) && update.includes(y)) {
          if (update.indexOf(x) >= update.indexOf(y)) {
            isViolated = true;
            break;
          }
        }
      }

      if (!isViolated) {
        validUpdates.push(update);
      }
    }

    validUpdates.forEach((validUpdate) => {
      middlePageNumbers.push(validUpdate[(validUpdate.length - 1) / 2])
    })

    return middlePageNumbers.reduce((sum: number, num: number) => sum + num, 0).toString();
  }

  public part2(input: string): string {
    return "";
  }

  public parse(input: string) {
    const [rules, updates] = input.split(/\n\s*\n/)
      .map((part) => part.split("\n").filter((line) => line !== ""));

    return {
      rules: rules.map((line) => line.split("|").map(Number)),
      updates: updates.map((line) => line.split(",").map(Number)),
    };
  }
}
