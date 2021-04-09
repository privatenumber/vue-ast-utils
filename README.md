# vue-ast-utils <a href="https://npm.im/vue-ast-utils"><img src="https://badgen.net/npm/v/vue-ast-utils"></a> <a href="https://npm.im/vue-ast-utils"><img src="https://badgen.net/npm/dm/vue-ast-utils"></a> <a href="https://packagephobia.now.sh/result?p=vue-ast-utils"><img src="https://packagephobia.now.sh/badge?p=vue-ast-utils"></a> <a href="https://bundlephobia.com/result?p=vue-ast-utils"><img src="https://badgen.net/bundlephobia/minzip/vue-ast-utils"></a>

Utils for working with Vue 3 AST nodes

## 🙋‍♂️ Why?
Vue 3 comes with types, but ambient const enums cannot be accessed when building your project with [`isolatedModules`](https://www.typescriptlang.org/tsconfig#isolatedModules):

```ts
import { NodeTypes } from '@vue/compiler-core';

console.log(NodeTypes.ATTRIBUTE === Node.type);

// Cannot access ambient const enums when the '--isolatedModules' flag is provided. ts(2748)
```

Related issue: [vue-next#1228](https://github.com/vuejs/vue-next/issues/1228)

These utils contain type checking so you don't need to import ambient types.

## 🚀 Install
```sh
npm i -D vue-ast-utils @vue/compiler-core
```
