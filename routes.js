import Router from 'koa-router';

export default (app) => {
    const prefix = '/user';
    const router = new Router({prefix});

    router.get('/', async (ctx) => {
        await ctx.render('index', {
            name: 'luodaxu',
            age: 22
        });
    });

    app
        .use(router.routes())
        .use(router.allowedMethods());
};
