import fs from "fs";
import path from "path";

export function buildEventPath(db) {
  return path.join(process.cwd(), "data", `${db}.json`);
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}
