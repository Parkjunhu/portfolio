const Router = require('koa-router');
const services = require('../services');

const router = new Router();

router.get('/ping', (ctx) => {
  ctx.response.body = 'pong';
});

router.post('/proxy', services.proxy.PostProxyForOtherApi);
router.get('/proxy', services.proxy.GetProxyForOtherApi);

module.exports = router;
