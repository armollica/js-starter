import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const nodeResolvePlugin = nodeResolve({
    jsnext: true,
    main: true
});

const commonjsPlugin = commonjs();

export default {
    entry: 'index.js',
    dest: 'build/js-starter.js',
    format: 'umd',
    moduleName: 'jsStarter',
    plugins: [
        nodeResolvePlugin,
        commonjsPlugin
    ]
}
