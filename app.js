import Koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';
import render from 'koa-ejs';
import co from 'co';
import path from 'path';
import router from './routes';

const app = new Koa();

render(app, {
    root: './views',
    layout: false,
    viewExt: 'html',
    cache: false
});

app.use(logger());
app.use(bodyParser());
app.use(convert(serve(path.join(__dirname, 'public'))));

app.context.render = co.wrap(app.context.render);
router(app);

app.listen(8999);
