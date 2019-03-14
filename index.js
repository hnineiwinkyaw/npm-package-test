module.exports = function test(string) {
  if (typeof string !== "string") throw new TypeError("We want a string!");
  return string.replace(/\s/g, "");
};