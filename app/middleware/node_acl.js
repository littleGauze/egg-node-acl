'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const { app } = ctx;
    const { routes: { prefix = '', ignore = [], match = [] } = {} } = app.config.nodeAcl.client;
    let { userId, id, _id } = ctx.state.user || {};
    userId = userId || id || _id;

    // check ignore path
    let pathStr = ctx.path.replace(prefix, '');
    pathStr = pathStr.replace(/\/$/, '');

    if (ignore.some(p => {
      if (p instanceof RegExp) {
        return p.test(pathStr);
      }
      return p === pathStr;
    })) {
      await next();
      return;
    }

    const mdw = await app.nodeAcl.koaMiddleware({ userId, useRes: getResouce(pathStr, match) });

    await mdw(ctx, next);
  };
};

function getResouce(path, match) {
  const res = match.find(it => {
    if (it.path instanceof RegExp) {
      return it.path.test(path);
    }
    return it.path === path;
  });
  if (res) {
    return res.resource;
  }
  return 'none';
}
