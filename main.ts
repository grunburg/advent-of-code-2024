import { parseArgs } from "jsr:@std/cli/parse-args";
import AbstractSolution from "./src/solutions/abstract-solution.ts";

const args = parseArgs(Deno.args, {
  string: ["day"],
  default: { day: 1 },
});

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const input = await Deno.readTextFile(
    `./src/solutions/day-${args.day}/input.txt`,
  );

  const module = await import(`./src/solutions/day-${args.day}/solution.ts`);

  const solution = module.default;
  const instance = new solution() as AbstractSolution;

  console.log(`Part 1: ${instance.part1(input)}`);
  console.log(`Part 2: ${instance.part2(input)}`);
}
