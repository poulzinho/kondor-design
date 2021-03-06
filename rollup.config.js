import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'src/index.ts',
        output: {
            dir: "lib/",
            format: 'esm',
            "sourcemap": true,
        },
        external: ['lit-element'],
        plugins: [
            typescript(),
            babel({
                babelHelpers: 'bundled',
                exclude: './node_modules/**',
                extensions: ['.js', '.ts']
            }),
            resolve({
                extensions: ['.js', '.ts']
            }),
        ]
    }
];
