import Router from 'koa-router';
import userCtrl from '../controllers/user';

function buildUserRoute(app) {
  const prefix = '/rest/user';
  const router = new Router({ prefix });

  router.get('/', userCtrl.all);
  router.post('/', userCtrl.post);
  router.get('/:id', userCtrl.get);
  router.put('/:id', userCtrl.put);
  router.delete('/:id', userCtrl.delete);

  app
    .use(router.routes())
    .use(router.allowedMethods());
}

export default buildUserRoute;
