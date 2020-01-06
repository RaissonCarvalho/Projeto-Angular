const proxy = [{
    context: ['/api'],
    target: 'http://localhost:8000',
    secure: false,
    pathRewrite: { '^/api': '' }
}];
module.exports = proxy;