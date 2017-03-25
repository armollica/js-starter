# JavaScript starter repo

Template for JavaScript packages meant to run in the browser and in [Node.js](https://nodejs.org/en/).

The package structure is based on [D3.js](https://d3js.org/) modules like [d3-dsv](https://github.com/d3/d3-dsv).

## Usage

1. In `package.json` replace the "js-starter" bits with your package name. As an example, this package depends on D3. If you want to change this, change the `--globals d3:d3` from the `pretest` script and the `d3` part from the dependencies. See [Rollup's command line reference](https://github.com/rollup/rollup/wiki/Command-Line-Interface) for more on that.
3. Call `npm run build` to test, lint and minify the JavaScript package.
