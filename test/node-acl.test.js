'use strict';

const mock = require('egg-mock');

describe('test/node-acl.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/node-acl-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, nodeAcl')
      .expect(200);
  });
});
