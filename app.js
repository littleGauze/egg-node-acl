'use strict';

const acl = require('./lib/acl');

module.exports = class BootHook {
  constructor(app) {
    this.app = app;
  }

  async configWillLoad() {
    const { app } = this;

    // add acl middleware
    const { insertMdwAt } = app.config.nodeAcl;

    if (insertMdwAt !== undefined) {
      app.config.appMiddleware.splice(insertMdwAt, 0, 'nodeAcl');
    } else {
      app.config.appMiddleware.push('nodeAcl');
    }
  }

  async didReady() {
    // load acl singleton
    acl(this.app);
  }
};
