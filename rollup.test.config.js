import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import common from '@rollup/plugin-commonjs';
import multiEntry from '@rollup/plugin-multi-entry';

export default [
    {
        input: 'src/**/*test.ts',
        output: {
            file: 'test/bundle.test.js',
            format: 'esm',
        },
        plugins: [
            babel({
                babelHelpers: 'bundled',
                exclude: './node_modules/**',
                extensions: ['.js', '.ts']
            }),
            common({
                namedExports: {
                    'chai': ['expect', 'assert']
                }
            }),
            resolve({
                extensions: ['.js', '.ts']
            }),
            multiEntry(),
        ]
    }
];
