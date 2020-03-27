let postcss = require('postcss')

let pxRegExp = /\b(\d+(\.\d+)?)px\b/;
let pxGlobalRegExp = new RegExp(pxRegExp.source, 'g');
let checkScaleRegExp = /\/\* postcss-scale-px (.*?) \*\//;

module.exports = postcss.plugin('postcss-scale', (opts = { scale: 2 }) => {

  // Work with options here

  return (root, result) => {
    // Transform CSS AST here

    if (!checkScaleRegExp.exec(root.source.input.css)) {
      result.root = root;
      return;
    }

    let disableAttributes = [];
    const disableAttributeString = checkScaleRegExp.exec(root.source.input.css)[1]
    if (disableAttributeString) {
      disableAttributes = disableAttributeString.split(',');
    }

    console.log('disableAttributes', disableAttributes)

    root.walkDecls(function (decl) {
      if (disableAttributes.indexOf(decl.prop) == -1) {
        if (/px/.test(decl.value)) {
          decl.value = decl.value.replace(pxGlobalRegExp, function (match, p1) {
            return p1 * opts.scale + 'px'
          })
        }
      }
    });

    result.root = root;
  };
});
