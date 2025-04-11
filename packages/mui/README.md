# @react-awesome-query-builder-dev/mui

[![npm](https://img.shields.io/npm/v/@react-awesome-query-builder-dev/mui.svg)](https://www.npmjs.com/package/@react-awesome-query-builder-dev/mui)

This packages provides [MUI](https://mui.com/) widgets

## Installation

Peer dependencies that needs to be installed:
```
npm i @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-date-pickers @mui/base --save
```

Install:
```
npm i @react-awesome-query-builder-dev/mui --save
```

## Usage

Use `MuiConfig`. 

See [minimal example in readme](https://github.com/ukrbublik/react-awesome-query-builder#usage) with modifications at top:
```js
// >>>
import type { JsonGroup, Config, ImmutableTree, BuilderProps } from '@react-awesome-query-builder-dev/mui'; // for TS example
import { Query, Builder, Utils as QbUtils } from '@react-awesome-query-builder-dev/mui';
import { MuiConfig, MuiWidgets } from '@react-awesome-query-builder-dev/mui';
import '@react-awesome-query-builder-dev/mui/css/styles.css';
const InitialConfig = MuiConfig;
// <<<
```
