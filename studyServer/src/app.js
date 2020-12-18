const Koa = require('koa');
const cors = require('@koa/cors');


const bodyParser = require('koa-bodyparser');

const router = require('./routes');

const app = new Koa();

const middleWare = async (ctx, next) => {
  let targetUrl;
  if(ctx.method == 'GET'){
    targetUrl = ctx.request.query.targetUrl;
  } else {
    targetUrl = ctx.request.body.targetUrl;
  }
  if(!targetUrl) {
    ctx.body = 'required targetUrl in body';
    return;
  }
  await next();
}

app
  .use(cors())
  .use(bodyParser({
    onerror(err, ctx) {
      return response.sendError(ctx, response.ERROR_CODE.JSON_PARSING);
    },
  }))
  .use(middleWare)
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = app;
