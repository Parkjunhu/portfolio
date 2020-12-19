const axios = require('axios').default;
const { response: responseLib } = require('../../lib');

const PostProxyForOtherApi = async (ctx) =>{
    const { targetUrl } = ctx.request.body;
    const params = {
        ...ctx.request.body
    };
    delete params.targetUrl;
    
    try {
        const response = await axios.post(targetUrl, params)
        ctx = responseLib.responseForProxy(ctx, response);
    } catch (err) {
        ctx = responseLib.responseForProxy(ctx, err.response);
    }
    
}

const GetProxyForOtherApi = async (ctx) => {
    const { targetUrl } = ctx.query;
    
    const params = {
        ...ctx.query
    };
    delete params.targetUrl;

    try {
        const response = await axios.get(targetUrl, {
            params
        })
        ctx = responseLib.responseForProxy(ctx, response);
    } catch (err) {
        ctx = responseLib.responseForProxy(ctx, err.response);
    }
}

module.exports = {
    PostProxyForOtherApi,
    GetProxyForOtherApi
};
