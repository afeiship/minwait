# minwait
> Ensure async operations take at least N milliseconds.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
yarn add @jswork/minwait
```

## usage
```js
import minwait from '@jswork/minwait';

async function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve('Data fetched!'), 50));
}

async function main() {
  console.log('Fetching data...');
  const result = await minwait(fetchData, 1000);
  console.log(result);
  // Expected output after at least 1000ms: Data fetched!
}

main();
```

## license
Code released under [the MIT license](https://github.com/afeiship/@jswork/minwait/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/minwait
[version-url]: https://npmjs.org/package/@jswork/minwait

[license-image]: https://img.shields.io/npm/l/@jswork/minwait
[license-url]: https://github.com/afeiship/@jswork/minwait/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/minwait
[size-url]: https://github.com/afeiship/@jswork/minwait/blob/master/dist/@jswork/minwait.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/minwait
[download-url]: https://www.npmjs.com/package/@jswork/minwait
