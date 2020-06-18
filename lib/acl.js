'use strict';

const Acl = require('@littlegauze/acl');

module.exports = app => {
  app.addSingleton('nodeAcl', createAcl);
};

async function createAcl(config, app) {
  const { rules = [], hierarchy = [], superAdmin = {} } = config;
  const db = app.mongoose.connection.db;
  const acl = new Acl(new Acl.mongodbBackend(db, 'roles_', true));

  // load rules
  await acl.allow(rules);

  // add parents
  for (const { parent, children } of hierarchy) {
    await acl.addRoleParents(parent, children);
  }

  // grant super
  await acl.addUserRoles(superAdmin.userId, superAdmin.roles);

  return acl;
}
