const fs = require("fs");

const content = fs.readFileSync("readme.md", "utf8");

const words = content.split(" ");

//const wordCount = words.filter((word) => word === "pass");
const wordCount = (words) => {
  let counter = 0;
  for (word of words) {
    let splitWord = word.split("//");
    for (split of splitWord) {
      if (split.toLowerCase().includes("react")) {
        counter += 1;
      }
    }
  }
  return counter;
};

console.log(wordCount(words));
