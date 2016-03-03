import Router from 'koa-router';
import passport from 'passport';
function r(app) {
    const router = new Router();
    router.get('/login', async (ctx)=> {
        await ctx.render('login');
    });
    router.post('/login', passport.authenticate('local', {
        successRedirect: '/user',
        failureRedirect: '/login'
    }));
    app
      .use(router.routes())
      .use(router.allowedMethods());
}

export default r;
