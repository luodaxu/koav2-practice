import Router from 'koa-router';
import passport from 'passport';
function r(app) {
    const router = new Router();

    router.get('/', async ctx => {
        let loginfo = {
            logined: false
        };
        if(ctx.req.user) {
            loginfo.logined = true;
            loginfo.name = ctx.req.user.name.name;
        }
        await ctx.render('index', {
            title: '主页',
            loginfo: loginfo
        });
    });
    router.get('/login', async (ctx)=> {
        if(ctx.req.user) return ctx.redirect('/');
        await ctx.render('login', {
            title: '用户登录',
            loginfo: null
        });
    });
    router.post('/login', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));
    router.get('/register', async ctx => {
        await ctx.render('register', {
            title: '用户注册',
            loginfo: null
        });
    });
    router.post('/register', async ctx => {
        ctx.redirect('/login');
    });
    router.get('/logout', async ctx => {
        ctx.logout();
        ctx.redirect('/');
    });
    app
      .use(router.routes())
      .use(router.allowedMethods());
}

export default r;
