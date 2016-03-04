import Router from 'koa-router';
import postCtrl from '../controllers/post';

function buildPostRoute(app) {
  const prefix = '/rest/post';
  const router = new Router({ prefix });

  router.get('/', postCtrl.all);
  router.post('/', postCtrl.post);
  router.get('/:id', postCtrl.get);
  router.put('/:id', postCtrl.put);
  router.delete('/:id', postCtrl.delete);

  app
    .use(router.routes())
    .use(router.allowedMethods());
}

export default buildPostRoute;
