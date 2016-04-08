import Router from 'koa-router';
import passport from 'passport';
function r(app) {
    const router = new Router();

    router.get('/config' ,async ctx => {
        if(ctx.query.app === 'HRGroup:HRC') {
            ctx.body = {
                ResourceType: ["HRGroup:WIILDistributionResourceType", "Global:WebService", "Global:WebPage"],
                ApplicationType: ["HRGroup:AppType1", "HRGroup:AppType2"],
                RoleType: [],
                IsDynamic: false,
                Permission: ['allow']
            }
        } else if (ctx.query.app === 'HRGroup:APP2') {
            ctx.body = {
                ResourceType: ["HRGroup:WIILDistributionResourceType", "HRGroup:HRCSelectedType1", "HRGroup:HRCSelectedType2"],
                ApplicationType: ["HRGroup:AppType3"],
                RoleType: [],
                IsDynamic: false,
                Permission: ['allow', 'deny']
            }
        }
    });

    router.get('/', async ctx => {
        let loginfo = {
            logined: false
        };
        if(ctx.isAuthenticated()) {
            loginfo.logined = true;
            loginfo.name = ctx.passport.user.get('username');
            $this: ctx
        }
        await ctx.render('index', {
            title: '主页',
            loginfo: loginfo,
            $this: ctx
        });
    });
    router.get('/hello', async ctx => {
        await ctx.render('hello');
    });
    router.get('/login', async (ctx)=> {
        if(ctx.isAuthenticated()) {
            ctx.flash = {error: '你已经登陆'};
            return ctx.redirect('/');
        };
        await ctx.render('login', {
            title: '用户登录',
            loginfo: null,
            user: ctx.req.user || {},
            $this: ctx
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
