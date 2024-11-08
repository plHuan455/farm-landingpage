/* eslint-disable */
const packageJSON = require("../../package.json")
const transpiledPackages = Object.keys(packageJSON.dependencies).filter((it) => it.includes("@kawaii/"))
const withTM = require("next-transpile-modules")(transpiledPackages)

module.exports = {
  withTM,
}
