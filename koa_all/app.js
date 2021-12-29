const Koa = require('koa');

const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const KoaStatic = require('koa-static'); //静态资源
const controller = require('./controller');
// let staticFiles = require('./static/static-files');

const app = new Koa();
// log request URL:
app.use(async(ctx, next) => {
    // ctx.set('Access-Control-Allow-Origin', '*');
    // ctx.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    // ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    console.log(`app Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}));

app.use(bodyParser());
// add controllers:
app.use(controller());

app.use(KoaStatic(__dirname + '/dist/css/'));
app.use(cors)
    //读取静态文件
    // app.use(staticFiles('/static/', __dirname + '/static'));
app.listen(8080);
console.log('app started at port 8080...');