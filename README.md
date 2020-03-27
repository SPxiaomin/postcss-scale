# PostCSS Scale

[PostCSS] plugin for scaling css px attributes.

[PostCSS]: https://github.com/postcss/postcss

```css
/* postcss-scale-px box-shadow,border */
.foo {
  /* Input example */

  display: flex;
  font-size: 13px;
  border: 1px solid #fff;
}
```

```css
.foo {
  /* Output example */
  display: flex;
  font-size: 26px;
  border: 1px solid #fff;
}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-scale'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
