export default async function generate(day: string): Promise<void> {
  await Deno.mkdir(`./src/solutions/day-${day}`, { recursive: true });

  const files = {
    "input": "txt",
    "test-input": "txt",
    "solution": "ts",
    "solution.test": "ts",
  };

  for (const [name, extension] of Object.entries(files)) {
    const template = `./src/template/${name}.txt`;
    const target = `./src/solutions/day-${day}/${name}.${extension}`;

    await Deno.copyFile(template, target);

    let content = await Deno.readTextFile(target);
    content = content.replaceAll("<day>", day);
    await Deno.writeTextFile(target, content);
  }
}
