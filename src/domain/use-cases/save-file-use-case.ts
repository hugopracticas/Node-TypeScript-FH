const fs = require("node:fs");

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {}

  execute({
    fileContent,
    fileDestination = "outputs",
    fileName = "table",
  }: Options): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      //   fs.writeFile(
      //     `${fileDestination}/${fileName}.txt`,
      //     fileContent,
      //     (err: string) => {
      //       if (err) {
      //         console.log(err);
      //       } else {
      //         console.log("Success");
      //       }
      //     }
      //   );
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
