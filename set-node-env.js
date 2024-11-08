/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process")
let nodeEnv = "production"
execSync(`cross-env NODE_ENV=${nodeEnv} next build`, { stdio: "inherit" })
