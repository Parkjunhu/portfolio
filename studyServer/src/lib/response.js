const responseForProxy = (ctx, responseData) => {
    ctx.response.status = responseData.status;
    ctx.response.headers = responseData.headers;
    ctx.response.body = responseData.data;
    return ctx;
}

module.exports = {
    responseForProxy,
}