"use strict";

const fs = require("fs");

fs.readFile("input.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const json = JSON.parse(data);
    console.log(json.data);
  }
});

try {
  const input = fs.readFileSync("input.json", "utf-8");
  console.log(input);
} catch (err) {
  console.log(err);
}

fs.stat("input.json", function(err, stat) {
  if (err) {
    console.log(err);
  } else {
    // 是否是文件:
    console.log("isFile: " + stat.isFile());
    // 是否是目录:
    console.log("isDirectory: " + stat.isDirectory());
    if (stat.isFile()) {
      // 文件大小:
      console.log("size: " + stat.size);
      // 创建时间, Date对象:
      console.log("birth time: " + stat.birthtime);
      // 修改时间, Date对象:
      console.log("modified time: " + stat.mtime);
    }
  }
});
