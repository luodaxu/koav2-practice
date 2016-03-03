import Koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import convert from 'koa-convert';  // necessary for koa v2
import bodyParser from 'koa-bodyparser';
import session from 'koa-generic-session';
import MongoStore from 'koa-generic-session-mongo';
import render from 'koa-ejs';
import co from 'co';
import path from 'path';
import './db/db';
import unauthrouter from './unauthrouter';
import router from './routes';
import authMiddleware from './middlewares/authMiddleware';

const app = new Koa();
app.keys = ['secret'];
app.use(logger());
app.use(bodyParser());
app.use(convert(session({
    store: new MongoStore({
        url: "mongodb://127.0.0.1:27017/koav2"
    })
})));

import './auth';
import passport from 'koa-passport';
app.use(passport.initialize())
app.use(passport.session())
render(app, {
    root: './views',
    layout: false,
    viewExt: 'html',
    cache: false
});
app.use(convert(serve(path.join(__dirname, 'public'))));
app.context.render = co.wrap(app.context.render);

unauthrouter(app);
app.use(authMiddleware());
router(app);

app.listen(8999);
