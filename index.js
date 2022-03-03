const fs = require("fs");
function objectFill(target, source) {
  let result = {};
  let targetKeys = Object.keys(target);
  targetKeys.forEach((targetKey) => {
    for (let sourceKey in source) {
      if (targetKey === sourceKey) {
        result[targetKey] = source[targetKey];
      }
    }
  });
  return result;
}
function jsonFill(targetFilePath, sourceFilePath, outputJsonFilePath) {
  let targetJsonFile = fs.readFileSync(targetFilePath);
  let sourceJsonFile = fs.readFileSync(sourceFilePath);
  let targetJson = JSON.parse(targetJsonFile);
  let sourceJson = JSON.parse(sourceJsonFile);
  let filledObject = objectFill(targetJson, sourceJson);
  fs.writeFileSync(outputJsonFilePath, JSON.stringify(filledObject));
  return "Done...";
}
module.exports = {objectFill,jsonFill};
