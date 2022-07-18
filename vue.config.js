module.exports = {
    chainWebpack: config => {
        // GraphQL Loader
        config.module
            .rule('rules')
            .test(/\.(png|jpe?g|gif|svg|cur)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .end()
    }
}