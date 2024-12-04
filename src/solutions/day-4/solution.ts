import AbstractSolution from "../abstract-solution.ts";

enum Direction {
  HorizontalForwards = "hf",
  HorizontalBackwards = "hb",
  VerticalForwards = "vf",
  VerticalBackwards = "vb",
  DiagonalRightForwards = "drf",
  DiagonalRightBackwards = "drb",
  DiagonalLeftForwards = "dlf",
  DiagonalLeftBackwards = "dlb",
}

export default class Solution extends AbstractSolution {
  public part1(input: string): string {
    let count: number = 0;

    Object.values(Direction).forEach((direction) => {
      const lines: string[] = this.parse(direction, input)();
      lines.forEach((line) => {
        for (let i = 0; i <= line.length - 4; i++) {
          if (line.substring(i, i + 4) === "XMAS") {
            count++;
          }
        }
      });
    });

    return count.toString();
  }

  public part2(input: string): string {
    return "";
  }

  private parse(direction: Direction, input: string): () => string[] {
    const matrix = input.split("\n").map((line) => line.split(""));

    switch (direction) {
      case Direction.HorizontalForwards:
        return ((): string[] => input.split("\n"));
      case Direction.HorizontalBackwards:
        return ((): string[] =>
          input.split("\n").map((line) => line.split("").reverse().join("")));
      case Direction.VerticalForwards:
        return ((): string[] => {
          const result = [];

          for (let col = 0; col < matrix[0].length; col++) {
            let str = "";
            for (let row = 0; row < matrix.length; row++) {
              str += matrix[row][col];
            }
            result.push(str);
          }

          return result;
        });
      case Direction.VerticalBackwards:
        return ((): string[] => {
          const result = [];

          for (let col = 0; col < matrix[0].length; col++) {
            let str = "";
            for (let row = matrix.length - 1; row >= 0; row--) {
              str += matrix[row][col];
            }
            result.push(str);
          }

          return result;
        });
      case Direction.DiagonalRightForwards:
        return ((): string[] => {
          const result = [];
          const len = matrix.length + matrix[0].length - 1;

          for (let d = 0; d < len; d++) {
            let str = "";
            for (let row = 0; row < matrix.length; row++) {
              const col = d - row;
              if (col >= 0 && col < matrix[0].length) {
                str += matrix[row][col];
              }
            }

            if (str) result.push(str);
          }

          return result;
        });
      case Direction.DiagonalRightBackwards:
        return ((): string[] => {
          const result = [];
          const len = matrix.length + matrix[0].length - 1;

          for (let d = 0; d < len; d++) {
            let str = "";
            for (let row = 0; row < matrix.length; row++) {
              const col = matrix[0].length - 1 - d + row;
              if (col >= 0 && col < matrix[0].length) {
                str += matrix[row][col];
              }
            }

            if (str) result.push(str);
          }

          return result;
        });
      case Direction.DiagonalLeftForwards:
        return ((): string[] => {
          const result = [];
          const len = matrix.length + matrix[0].length - 1;

          for (let d = 0; d < len; d++) {
            let str = "";
            for (let row = matrix.length - 1; row >= 0; row--) {
              const col = d - (matrix.length - 1 - row);
              if (col >= 0 && col < matrix[0].length) {
                str += matrix[row][col];
              }
            }

            if (str) result.push(str);
          }

          return result;
        });
      case Direction.DiagonalLeftBackwards:
        return ((): string[] => {
          const result = [];
          const len = matrix.length + matrix[0].length - 1;

          for (let d = 0; d < len; d++) {
            let str = "";
            for (let row = 0; row < matrix.length; row++) {
              const col = d - row;
              if (col >= 0 && col < matrix[0].length) {
                str = matrix[row][col] + str;
              }
            }

            if (str) result.push(str);
          }

          return result;
        });
      default:
        return (() => []);
    }
  }
}
