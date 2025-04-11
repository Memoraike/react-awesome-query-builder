# @react-awesome-query-builder-dev/sql

[![npm](https://img.shields.io/npm/v/@react-awesome-query-builder-dev/sql.svg)](https://www.npmjs.com/package/@react-awesome-query-builder-dev/sql)

This packages provides import from SQL using [node-sql-parser](https://www.npmjs.com/package/node-sql-parser)

## Installation

Install:

```sh
npm i @react-awesome-query-builder-dev/sql --save
```

## Usage

```js
import { Utils } from '@react-awesome-query-builder-dev/core';
import { SqlUtils } from "@react-awesome-query-builder-dev/sql";

const importFromSql = (sqlStr) => {
  const {tree, errors: sqlErrors, warnings: sqlWarnings} = SqlUtils.loadFromSql(sqlStr, state.config);
  if (sqlErrors.length) {
    console.log("Import errors: ", sqlErrors);
  }
  const {fixedTree} = Utils.sanitizeTree(tree, state.config);
  setState({
    ...state, 
    tree: fixedTree,
  });
};
```
