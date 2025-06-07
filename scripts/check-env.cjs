// eslint-disable-next-line @typescript-eslint/no-require-imports
const envAligner = require('env-aligner')

envAligner({
  rootDir: process.cwd(),
  mode: { isStrict: true }
})