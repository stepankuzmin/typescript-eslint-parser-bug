# @typescript-eslint/parser 8.x + `allowDefaultProject`

```
npm run lint

> typescript-eslint-parser@1.0.0 lint
> eslint .


Error while parsing /node_modules/earcut/src/earcut.js
Line undefined, column undefined: /node_modules/earcut/src/earcut.js was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProject.
`parseForESLint` from parser `/node_modules/@typescript-eslint/parser/dist/index.js` is invalid and will just be ignored

/src/index.ts
  1:20  warning  Parse errors in imported module 'earcut': /node_modules/earcut/src/earcut.js was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProject. (undefined:undefined)  import/no-named-as-default
```
