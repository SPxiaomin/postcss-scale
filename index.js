let postcss = require('postcss')

module.exports = postcss.plugin('postcss-scale', (opts = { }) => {

  // Work with options here

  return (root, result) => {

    // Transform CSS AST here
    root.walkRules(function(rule) {
      console.log('rule', rule)
      // rule.walkDecls(function(decl) {
      // });
    });
  }
})
