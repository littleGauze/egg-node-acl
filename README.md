# egg-node-acl

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-node-acl.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@littlegauze/egg-node-acl
[travis-image]: https://img.shields.io/travis/eggjs/egg-node-acl.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-node-acl
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-node-acl.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-node-acl?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-node-acl.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-node-acl
[snyk-image]: https://snyk.io/test/npm/egg-node-acl/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-node-acl
[download-image]: https://img.shields.io/npm/dm/egg-node-acl.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-node-acl

<!--
Description here.
-->

## Install

```bash
$ npm i @littlegauze/egg-node-acl --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.nodeAcl = {
  enable: true,
  package: 'egg-node-acl',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.nodeAcl = {
  client: {
    rules: [], // node-acl rules. { roles: [], allows: [] }
    hierarcky: [], // node-acl parent map. { parent: 'admin', children: ['blog', 'account'] }
    routes: {
      prefix: '', // remove the prefix from path
      ignore: [], // ignore pattern
      match: [], // match pattern, route and resource map. { path: '/user', resource: 
    },
    superAdmin: {
      userId: 'userid', // default super admin add to db
      roles: [ 'super' ], // default roles grant to user
    },
  },
  insertMdwAt: 0, // node-acl middleware order inset appMiddleware.
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
