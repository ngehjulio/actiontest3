const { default: semanticRelease } = require("semantic-release");

module.exports =  {
  branches: "main",
  repositoryUrl: "https://github.com/ngehjulio/actiontest3.git",
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github']
}