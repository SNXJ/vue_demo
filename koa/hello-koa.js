const koa = require('koa')
const app = new koa()
    // 普通模式async
    // app.use(async(ctx, next) => {
    //     console.log("path=====%d==" + ctx.request.path)
    //     if (ctx.request.path === '/test') {
    //         ctx.response.body = 'test page';
    //     } else {
    //         await next();
    //         ctx.response.type = 'text/html';
    //         ctx.response.body = '<p>hello koa</p>';

//     }

// });
/**+++++++++++++++++++++++++++koa-router++++get+++++++++++++++++++++++++++++++++ */

//使用 koa-router
/** 
 注意这里是（）相当于
 const fn_router= require("koa-router");
 const router=fn_router();
*/

// const router = require("koa-router")();
// app.use(async(ctx, next) => {
//     // console.log('===${ ctx.request.method}=>${ctx.request.url}=====${ctx.request.path}')
//     console.log("==mrthod==>" + ctx.request.method + "===url==>" + ctx.request.url + "====path==>" + ctx.request.path);
//     await next()
// })

// router.get("/hello/:name", async(ctx, next) => {
//     var name = ctx.params.name;
//     console.log("name===>" + name)
//     ctx.response.body = "<h3>hello ! " + name + "!!!!!</h3>";
// })
// router.get("/", async(ctx, next) => {
//     ctx.response.body = "<h3>index page</h3>";
// })

// app.use(router.routes());

/**+++++++++++++++++++++++++++koa-bodyparser解析post请求的body++++post+++++++++++++++++++++++++++++++++ */


const router = require("koa-router")();
const bodyparser = require("koa-bodyparser");
app.use(async(ctx, next) => {
    // console.log('===${ ctx.request.method}=>${ctx.request.url}=====${ctx.request.path}')
    console.log("==mrthod==>" + ctx.request.method + "===url==>" + ctx.request.url + "====path==>" + ctx.request.path);
    await next()
});

router.get("/", async(ctx, next) => {
    var name = ctx.params.name || "空";
    console.log(`name===> ${name}`)
    ctx.response.body = `<h1>登陆</h1>
    <form action="/signin" method="post">
    name:<input name="name" value="koa"></br>
    pwd:<input name="password" type="password"></br>
    <input value="submit" type="submit" >
    </form>
    `;

});
router.post("/signin", async(ctx, next) => {
    var name = ctx.request.body.name || "空";
    var password = ctx.request.body.password || "空";
    console.log(`body==1===${JSON.stringify(ctx.request.body)}`)
    ctx.response.body = `<h1>Welcome, ${name}! login success</h1>`;
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}! login success</h1>`;
    } else {
        ctx.response.body = "login failed!!! \n please try again"
    }
});

app.use(bodyparser())
app.use(router.routes());
app.listen(8080);
console.log("app started at port 8080...");