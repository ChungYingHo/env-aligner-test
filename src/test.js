const envAligner = require('env-aligner')

// test default options
// console.log('The 1st test: default options')
// envAligner()

// test custom names
// console.log('The 2nd test: custom file names with .env.local and .env.sample')
// const test2names = {
//   schemaName: '.env.sample',
//   envName: '.env.local'
// }
// envAligner({fileNames: test2names})

// test custom names -2
// console.log('The 3rd test: custom file names with custom env file name')
// const test3names = {
//   envName: '.env.setting'
// }
// envAligner({fileNames: test3names})

// test custom names -3
// console.log('The 4th test: custom file names with custom schema file name')
// const test4names = {
//   schemaName: '.env.schema'
// }
// envAligner({fileNames: test4names})

// test custom options
// console.log('The 5th test: custom options with isCheckMissing false')
// const test3options = {
//   isCheckMissing: false
// }
// envAligner({checkOptions: test3options})

// test custom options -2 
// console.log('The 6th test: custom options with isCheckEmptyValue false')
// const test4options = {
//   isCheckEmptyValue: false
// }
// envAligner({checkOptions: test4options})

// test custom options -3
// console.log('The 7th test: custom options with isCheckExtra false')
// const test5options = {
//   isCheckExtra: false
// }
// envAligner({checkOptions: test5options})

// test custom options -4
// console.log('The 8th test: custom options with all false')
// const test6options = {
//   isCheckMissing: false,
//   isCheckEmptyValue: false,
//   isCheckExtra: false
// }
// envAligner({checkOptions: test6options})

// test custom options -5
// console.log('The 9th test: custom options with all true')
// const test7options = {
//   isCheckMissing: true,
//   isCheckEmptyValue: true,
//   isCheckExtra: true
// }
// envAligner({checkOptions: test7options})

// test custom options -6
// console.log('The 10th test: custom options with two false')
// const test8options = {
//   isCheckMissing: false,
//   isCheckExtra: false
// }
// envAligner({checkOptions: test8options})

// test rootDir setting
// console.log('The 11th test: custom rootDir as use application/project')
// envAligner({rootDir: 'application/project'})

// test rootDir setting with folder not exist
// console.log('The 12th test: custom rootDir as not exist folder')
// envAligner({rootDir: 'not_exist_folder'})

// test rootDir setting with folder exist
// console.log('The 13th test: custom rootDir as exist folder')
// envAligner({rootDir: 'frontend'})

// test rootDir setting with deep folder exist
// console.log('The 14th test: custom rootDir as deep exist folder')
// envAligner({rootDir: 'application/project/src'})

// test rootDir setting with same name but at different level
// console.log('The 15th test: custom rootDir as same name but at different level')
// envAligner({rootDir: 'frontend'})
// envAligner({rootDir: 'application/frontend'})

// test if schema and env file not at same level
// console.log('The 16th test: custom rootDir as same name but at different level')
// const test16names = {
//   schemaName: '.env.sample',
//   envName: '.env'
// }
// envAligner({fileNames: test16names})

// test if schema not exist
// console.log('The 17th test: custom schema file not exist')
// const test17names = {
//   schemaName: '.env.not_exist',
//   envName: '.env'
// }
// envAligner({fileNames: test17names})

// test if env not exist
// console.log('The 18th test: custom env file not exist')
// const test18names = {
//   schemaName: '.env.sample',
//   envName: '.env.not_exist'
// }
// envAligner({fileNames: test18names})

// test if schema and env file not exist
console.log('The 19th test: custom schema and env file not exist')
const test19names = {
  schemaName: '.env.not_exist',
  envName: '.env.not_exist'
}
envAligner({fileNames: test19names})
