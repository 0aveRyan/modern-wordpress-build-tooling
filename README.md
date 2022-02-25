# Modern WordPress Build Tooling

## Build Tools 101

Build tools are software that take source code and turn it into runtime code.

In legacy WordPress and more legacy JavaScript like jQuery, everything was basically runtime code. The PHP we wrote got executed by the server. The JavaScript we wrote got executed by the browser. Rinse and repeat.

But today, most JavaScript and lots of stylesheets get processed -- also known as transpiled -- from a developer-friendly dialect into a browser-friendly dialect. In WordPress, projects like Gutenberg are writing in ESNext JavaScript (and now TypeScript) and transpiled into ES6. Parts of WordPress Core rely on Sass and parts of Gutenberg rely on PostCSS.

Build tools can be daunting, frustrating and a roadblock if you're accustomed to writing runtime code, but they also come with lots of benefits. Build tools can split runtime files for fastest browser delivery, autoprefix CSS for cross-browser compatibility, lint source files as you work and once you're confident with them, they can dramatically speed up your workflow and code quality.

## How Build Tools Help Developers

* Automatically minify CSS and JavaScript for smaller files.
* Let humans write maintainable, readable JavaScript that transpiles to ugly, but browser-friendly files.
* Lint source files to standards and improve code quality & security.
* Automatically manage splitting of runtime code to deliver the best runtime performance.
* Once you're more confident with them, they can dramatically speed up your workflow and help you maintain quality.
* Build tools can be invaluable for teams working on a codebase. They can make code reviews easier, 
* Most medium-to-large companies in WordPress, more broadly in front-end development, rely on build tooling for performance, collaboration, internationalization and testing. Whether you want to work at a company, or get larger corporate clients, leveraging and setting up build tools is a hugely valuable career skill.

## Best Practices
* Avoid the temptation to automate every menial task -- consider ROI and avoid over-engineering.
* Avoid building snowflakes -- consider repeatability.
* Avoid the temptation of shiny new things -- be pragmatic.
* Expect whatever you build will be out-of-date in short order -- be willing to keep learning.

## Resources

### Webpack
* [@wordpress/scripts (wp-scripts) Documentation](https://github.com/WordPress/gutenberg/tree/trunk/packages/scripts)
* [@wordpress/create-block](https://github.com/WordPress/gutenberg/tree/trunk/packages/create-block) _(CRA for WordPress Blocks)_
* [webpack 5 documentation](https://webpack.js.org/concepts/)
* [Human Made webpack helpers](https://github.com/humanmade/webpack-helpers)
* [laravel-mix](https://laravel-mix.com/docs/6.0/installation)
* [wpack.io](https://wpack.io/)

### esbuild
* [esbuild](https://esbuild.github.io/)
* [wp-bundler](https://github.com/adambrgmn/wp-bundler) (esbuild ready for WordPress)

### @wordpress/env | wp-env
* [Official Docs](https://github.com/WordPress/gutenberg/tree/trunk/packages/env)
* [JSON config referece](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/#wp-env-json)

### Misc JavaScript
* https://github.com/nvm-sh/nvm
* https://www.npmjs.com/package/cross-env
* https://www.npmjs.com/package/rimraf
* https://github.com/chalk/chalk
* https://www.npmjs.com/package/npm-watch

### Composer
* [Autoloading](https://getcomposer.org/doc/01-basic-usage.md#autoloading)
* [Scripts](https://getcomposer.org/doc/articles/scripts.md)

### Scaffolding Tool
* [CLI Command](https://github.com/wp-forge/wp-cli-forge-command)
* [Templates](https://github.com/wp-forge/scaffolding-templates)
